import { CognitoAccessToken } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

const useAuthenticatedUser = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState<CognitoAccessToken['payload']>();
    const [hasAuthenticatedUser, setHasAuthenticatedUser] = useState<boolean>(false);

    useEffect(() => {
        getAuthenticatedUser();
    }, []);

    const getAuthenticatedUser = async () => {
        try {
            const currentSession = await Auth.currentSession();
            const user = currentSession.getAccessToken().payload;
            setAuthenticatedUser(user);
            setHasAuthenticatedUser(true)
        } catch (error) {
            return null;
        }
    }

    return [authenticatedUser, hasAuthenticatedUser];
}

export default useAuthenticatedUser;
