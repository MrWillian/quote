import { createContext, useContext, useState } from "react";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from '../config/userPool';
import { User } from "../interfaces";
import { ChildrenProps } from "../interfaces/types";

type AuthContextType = {
    user: User;
    login: (Username: string, Password: string) => Promise<unknown>;
    logout: () => void;
    signUp: (email: string, password: string, userAttributes: CognitoUserAttribute[]) => Promise<unknown>;
    getSession: () => Promise<unknown>;
    confirmCode: (email: string, confirmationCode: string) => Promise<unknown>;
};

const authContextDefaultValues: AuthContextType = {
    user: null,
    login: () => null,
    logout: () => {},
    signUp: () => null,
    getSession: () => null,
    confirmCode: () => null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
    const [user, setUser] = useState({});

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
                const user = {
                    name: userAttributes['given_name'],
                    email: email
                }
                setUser(user);
                resolve(data);
            });
        });
    }

    const confirmCode = async (email: string, confirmationCode: string) => {
        const user = new CognitoUser({ Username: email, Pool });

        return await new Promise((resolve, reject) => {
            user.confirmRegistration(confirmationCode, false, (error, result) => {
                if (error) {
                    console.error('failure: ', error);
                    reject(error);
                }
                console.log('success: ', result);
                resolve(result);
            });
        });
    }

    const value = { user, login, logout, getSession, signUp, confirmCode };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
