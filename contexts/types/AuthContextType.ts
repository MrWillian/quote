import { User } from "../../interfaces";

export type AuthContextType = {
    user: User;
    login: (Username: string, Password: string) => Promise<any>;
    logout: () => void;
    signUp: (email: string, password: string, givenName: string) => Promise<any>;
    getSession: () => Promise<unknown>;
    confirmCode: (email: string, confirmationCode: string) => Promise<any>;
    resendConfirmationCode: (email: string) => Promise<unknown>;
    getUserAttributeByName: (name: string) => Promise<string>;
    deleteUser: () => Promise<any>;
};
