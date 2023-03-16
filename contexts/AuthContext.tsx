import { createContext, useContext, useState } from "react";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from '../config/userPool';
import { User } from "../interfaces";
import { ChildrenProps } from "../interfaces/types";
import { AuthContextType } from "./types/AuthContextType";

const authContextDefaultValues: AuthContextType = {
    user: null,
    login: () => null,
    logout: () => {},
    signUp: () => null,
    getSession: () => null,
    confirmCode: () => null,
    resendConfirmationCode: () => null,
    getUserAttributeByName: () => null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
    const [user, setUser] = useState<User>({});

    const login = async (Username: string, Password: string) => {
        return await new Promise((resolve, reject) => {
            const authDetails = new AuthenticationDetails({ Username, Password });
            getCognitoUser(Username).authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    const user = { email: Username }
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
                const user = { name: userAttributes['given_name'], email: email }
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
        return await new Promise((resolve, reject) => {
            getCognitoUser(email).confirmRegistration(confirmationCode, false, (error, result) => {
                if (error) {
                    console.error('failure: ', error);
                    reject(error);
                }
                console.log('success: ', result);
                resolve(result);
            });
        });
    }

    const resendConfirmationCode = async (email: string) => {
        return await new Promise((resolve, reject) => {
            getCognitoUser(email).resendConfirmationCode((error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }

    const getUserAttributeByName = async (name: string) => {
        let atributte: string = "";
        await getUserAttributes()
            .then((data: CognitoUserAttribute[]) => data.filter((element) => element.Name === name))
            .then((element) => atributte = element[0].Value)
            .catch(error => console.error(error));
        return atributte;
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

    const getCognitoUser = (Username: string) => new CognitoUser({ Username, Pool });

    const value = { user, login, logout, getSession, signUp, confirmCode, resendConfirmationCode, getUserAttributeByName };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
