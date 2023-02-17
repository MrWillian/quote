import { createContext, ReactNode, useContext } from "react";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from '../config/userPool';

type authContextType = {
    login: (Username: string, Password: string) => Promise<unknown>;
    logout: () => void;
    signUp: (email: string, password: string, userAttributes: CognitoUserAttribute[]) => Promise<unknown>;
    getSession: () => Promise<unknown>;
    confirmCode: (attribute: string, email: string, confirmationCode: string) => Promise<unknown>;
};

const authContextDefaultValues: authContextType = {
    login: () => null,
    logout: () => {},
    signUp: () => null,
    getSession: () => null,
    confirmCode: () => null,
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

    const confirmCode = async (attribute = 'email', email: string, confirmationCode: string) => {
        const user = new CognitoUser({ Username: email, Pool });

        return await new Promise((resolve, reject) => {
            user.verifyAttribute(attribute, confirmationCode, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.error('onFailure: ', err);
                    reject(err);
                }
            });
        });
    }

    const value = { login, logout, getSession, signUp, confirmCode };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
