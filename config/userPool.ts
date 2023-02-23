import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_PPMhMDydV",
    ClientId: "5rbmo3caf1slu39g0sdflnbbng",
};

export default new CognitoUserPool(poolData);
