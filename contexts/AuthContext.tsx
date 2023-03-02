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
    getUserAttributes: () => Promise<unknown>;
    getSub: () => Promise<string>;
    getName: () => Promise<string>;
};

const authContextDefaultValues: AuthContextType = {
    user: null,
    login: () => null,
    logout: () => {},
    signUp: () => null,
    getSession: () => null,
    confirmCode: () => null,
    getUserAttributes: () => null,
    getSub: () => null,
    getName: () => null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
    const [user, setUser] = useState<User>({});

    const login = async (Username: string, Password: string) => {
        return new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });
    
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    const user = {
                        email: Username
                    }
                    setUser(user);
                    console.log('login user', user);
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

    const getSession = async (user = Pool.getCurrentUser()) => {
        return await new Promise((resolve, reject) => {
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

    const getUserAttributes = async () => {
        const user = Pool.getCurrentUser();
        getSession(user);
        return await new Promise((resolve, reject) => {
            user.getUserAttributes((error, result) => {
                if (error) {
                    console.error('failure: ', error);
                    reject(error);
                }
                resolve(result);
            });
        });
    }

    const getSub = async () => {
        let sub: string = "";
        await getUserAttributes()
            .then((data: CognitoUserAttribute[]) => data.filter((element) => element.Name === 'sub'))
            .then((element) => sub = element[0].Value)
            .catch(error => console.error(error));
        return sub;
    }

    const getName = async () => {
        let name: string = "";
        await getUserAttributes()
            .then((data: CognitoUserAttribute[]) => data.filter((element) => element.Name === 'given_name'))
            .then((element) => name = element[0].Value)
            .catch(error => console.error(error));
        return name;
    }

    const value = { user, login, logout, getSession, signUp, confirmCode, getUserAttributes, getSub, getName };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
