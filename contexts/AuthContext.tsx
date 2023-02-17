import { createContext, ReactNode, useContext } from "react";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from '../config/userPool';

type authContextType = {
    login: (Username: string, Password: string) => Promise<unknown>;
    logout: () => void;
    signUp: (email: string, password: string, userAttributes: CognitoUserAttribute[]) => Promise<unknown>;
    getSession: () => Promise<unknown>;
};

const authContextDefaultValues: authContextType = {
    login: () => null,
    logout: () => {},
    signUp: () => null,
    getSession: () => null,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const login = async (Username: string, Password: string) => {
        return new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });
    
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.error('onFailure: ', err);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log('newPasswordRequired: ', data);
                    resolve(data);
                },
            });
        });
    };

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        });
    }

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    };

    const signUp = async (email: string, password: string, userAttributes: CognitoUserAttribute[]) => {
        return await new Promise((resolve, reject) => {    
            Pool.signUp(email, password, userAttributes, null, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            })
        });
    }

    const value = { login, logout, getSession, signUp };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
