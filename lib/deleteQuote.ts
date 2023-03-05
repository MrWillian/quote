export async function deleteQuote(id: string) {
    let status: string;
    let data;
    let errorMessage: string = null;
    try {
        await fetch(`https://1ruz0p0nia.execute-api.us-east-1.amazonaws.com/quote?id=${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => {
            status = '200';
            data = response;
        });
    } catch(err: any) {
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
