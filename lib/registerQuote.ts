import { Quote } from "../interfaces/types";

export async function registerQuote(payload: Quote) {
    let status: string;
    let data;
    let errorMessage: string = null;
    try {
        await fetch('https://1ruz0p0nia.execute-api.us-east-1.amazonaws.com/quote', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then((response) => response.json())
        .then((fetchData) => {
            status = '200';
            data = fetchData;
        });
    } catch (err: any) {
        status = '500';
        errorMessage = err.message;
    } finally {       
        return { 
            status,
            data,
            errorMessage
        };
    }
}
