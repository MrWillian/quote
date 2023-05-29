import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

const useAuthenticatedUser = () => {
    const [hasAuthenticatedUser, setHasAuthenticatedUser] = useState<boolean>(false);

    useEffect(() => {
        getAuthenticatedUser();
    }, []);

    const getAuthenticatedUser = async () => {
        try {
            const currentSession = await Auth.currentSession();
            const user = currentSession.getAccessToken().payload;
            if (user) {
                setHasAuthenticatedUser(true)
            }
        } catch (error) {
            return null;
        }
    }

    const getUserId = async () => {
        try {
            const currentSession = await Auth.currentSession();
            const user = currentSession.getAccessToken().payload;
            return user.username;
        } catch (error) {
            return null;
        }
    }

    return [hasAuthenticatedUser, getUserId] as const;
}

export default useAuthenticatedUser;
