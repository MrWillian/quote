import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { User } from "../../interfaces";

export type AuthContextType = {
    user: User;
    login: (Username: string, Password: string) => Promise<unknown>;
    logout: () => void;
    signUp: (email: string, password: string, userAttributes: CognitoUserAttribute[]) => Promise<unknown>;
    getSession: () => Promise<unknown>;
    confirmCode: (email: string, confirmationCode: string) => Promise<unknown>;
    resendConfirmationCode: (email: string) => Promise<unknown>;
    getUserAttributeByName: (name: string) => Promise<string>;
    deleteUser: (email: string) => Promise<unknown>;
};
