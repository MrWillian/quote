import { useQueryQuotes } from "../../../hooks/useQueryQuotes";
import { deleteQuote } from "../../../lib/deleteQuote";

type Props = {
    filter?: string
}

export const QuotesContainer = ({ filter }: Props) => {
    const { data, isLoading } = useQueryQuotes(filter);

    const handleDelete = async (id: string) => {
        const result = await deleteQuote(id);
        if (result.status === '200') {
            alert('Sucesso ao tentar deletar...');
        }

        if (result.errorMessage) {
            alert('Ocorreu um erro ao tentar deletar...');
            console.log(result.errorMessage);
        }
    }

    return (
        <div className="flex flex-col justify-start no-scrollbar overflow-y-auto h-full bg-accent-color rounded divide-y divide-gray-500 shadow-md">
            {!isLoading ?
                data !== undefined ? 
                    data?.map(quote => (
                        <div className="flex justify-between hover:border-b-[1px]" key={quote.id}>
                            <div className='flex justify-center flex-col p-2'>
                                <h1 className="text-xl font-black">{quote.title}</h1>
                                <h3>{quote.description}</h3>
                            </div>
                            <div className='flex flex-col justify-center p-2'>
                                <h3>{quote.date}</h3>
                                <button className='bg-primary-color rounded shadow' onClick={() => handleDelete(quote.id)}>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))
                : (<h1 className="p-4">Ainda não há nenhuma recordação, escreva uma agora mesmo...</h1>)
                : (<p className="p-4">Carregando...</p>)
            }
        </div>
    );
}
