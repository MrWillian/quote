export async function getQuotesList(user_id: string) {
    let status: string;
    let data;
    let errorMessage: string = null;
    try {
        await fetch(`https://1ruz0p0nia.execute-api.us-east-1.amazonaws.com/quotes?user_id=${user_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => response.json())
        .then((fetchData) => {
            status = '200';
            data = fetchData.Items;
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
