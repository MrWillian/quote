import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
        statusCode: 200,
        body: `Queries: ${queries}`
    }
}

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                a: "5"
            }
        } as any
        const result = await lambdaHandler(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(`Queries: ${JSON.stringify(event.queryStringParameters)}`);
    });
});
