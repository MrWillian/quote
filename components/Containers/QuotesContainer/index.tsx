import { useQuery } from "react-query";
import { useAuth } from "../../../contexts/AuthContext";
import { Quote } from "../../../interfaces/types";
import { getQuotesList } from "../../../lib/listQuotes";

export const QuotesContainer = () => {
    const { getSub } = useAuth();
    const { data, isLoading } = useQuery<Quote[]>('quotes', async () => {
        const sub = await getSub();
        const quotes = await getQuotesList(sub).then(result => result.data);
        return quotes;
    });

    return (
        <div className="flex flex-col justify-start no-scrollbar overflow-y-auto h-full bg-accent-color rounded divide-y divide-gray-500 shadow-md">
            {!isLoading ?
                data !== undefined ? 
                    data?.map(quote => (
                        <div className="flex justify-between hover:border-b-[1px]" key={quote.id}>
                            <div className='flex justify-center flex-col p-2'>
                                <h1>{quote.title}</h1>
                                <h3>{quote.description}</h3>
                            </div>
                            <div className='flex flex-col p-2'>
                                <h3>{quote.date}</h3>
                                <button className='bg-primary-color rounded shadow'>
                                    Editar
                                </button>
                            </div>
                        </div>
                    ))
                : 
                    <h1 className="p-4">Ainda não há nenhuma recordação, escreva uma agora mesmo...</h1>
                : 
                    <p className="p-4">Carregando...</p>
            }
        </div>
    );
}
