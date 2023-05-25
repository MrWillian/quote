import { createContext, useContext, useState } from "react";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from '../config/userPool';
import { User } from "../interfaces";
import { ChildrenProps } from "../interfaces/types";
import { AuthContextType } from "./types/AuthContextType";
import {Auth} from 'aws-amplify';
import i18n from 'i18next';

const authContextDefaultValues: AuthContextType = {
    user: null,
    login: () => null,
    logout: () => null,
    signUp: () => null,
    getSession: () => null,
    confirmCode: () => null,
    resendConfirmationCode: () => null,
    getUserAttributeByName: () => null,
    deleteUser: () => null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
    const [user, setUser] = useState<User>({});

    const login = async (Username: string, Password: string) => {
        try {
            const authenticatedUser = await Auth.signIn(Username, Password);
            setUser(authenticatedUser);
            return { type: 'success' };
        } catch (error) {
            var errorMessage = '';
            switch (error.code) {
                case 'UserNotConfirmedException':
                    errorMessage = i18n.t('forms.error_user_not_confirmed');
                    break;
                case 'NotAuthorizedException':
                    errorMessage = i18n.t('forms.error_password');
                    break;
                case 'ResourceNotFoundException':
                    errorMessage = i18n.t('forms.error_user_not_found');
                    break;
                default:
                    errorMessage = i18n.t('forms.error');
                    break;
            }
            return { type: 'error', error: { code: error.code, message: error.message }};
        }
    };

    const signUp = async (email: string, password: string, givenName: string) => {
        try {
            const {user: authenticatedUser} = await Auth.signUp({
                username: email,
                password,
                attributes: {
                  email,
                  given_name: givenName,
                },
                autoSignIn: {
                  enabled: true,
                },
            });
            const user = { name: givenName, email: email };
            setUser(user);
            return { type: 'success', authenticatedUser };
        } catch (error) {
            return { type: 'error', error};
        }
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

    const logout = async () => {
        try {
            await Auth.signOut();
            return true;
        } catch (error) {
            return false;
        }
    };

    const confirmCode = async (email: string, confirmationCode: string) => {
        try {
            await Auth.confirmSignUp(email, confirmationCode);
            return {type: 'success'};
        } catch (error) {
            return {
                type: 'error',
                error: {
                    message: i18n.t('error_on_confirm_signup'),
                }
            };
        }
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

    const deleteUser = async () => {
        try {
            await Auth.deleteUser();
            return {
                type: 'success', message: i18n.t('confirm.success')
            }
        } catch (error) {
            return {
                type: 'error',
                error: {
                    message: i18n.t('forms.error')
                }
            }
        }
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
                    reject(error);
                }
                resolve(result);
            });
        });
    }

    const getCognitoUser = (Username: string) => new CognitoUser({ Username, Pool });

    const value = { user, login, logout, getSession, signUp, confirmCode, resendConfirmationCode, getUserAttributeByName, deleteUser };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
