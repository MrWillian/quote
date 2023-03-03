import { useEffect, useState } from 'react';
import { DashboardLayout, QuoteRegisterContainer, QuotesContainer, SearchButton } from '../../components';
import { useAuth } from "../../contexts/AuthContext";
import { useDebounce } from '../../hooks/useDebounce';

export default function Home() {
    const [name, setName] = useState('');
    const { getName } = useAuth();
    const [filter, setFilter] = useState('');
    const debouncedFilter = useDebounce(filter, 500);

    useEffect(() => {
        handleName();
    }, []);

    const handleName = async () => {
        const name = await getName();
        setName(name);
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col p-8 w-screen">
                <div>
                    <h1 className="uppercase font-bold tracking-wide text-2xl">Hello, <span className="text-accent-color tracking-wider">{name}</span></h1>
                    <h2 className="text-accent-color font-bold text-lg">Veja todas as suas memórias...</h2>
                </div>
                <div className="flex">
                    <div className='w-3/4 md:w-2/4 h-2/4'>
                        <div className="flex items-center justify-center my-6 w-full">
                            <form method="GET" className="w-full">
                                <div className="relative text-gray-600 focus-within:text-gray-400">
                                    <input 
                                        className="py-2 px-6 w-full text-white placeholder:text-white font-bold text-lg rounded shadow-2xl bg-accent-color focus:outline-none focus:bg-white focus:text-accent-color"
                                        type="text" 
                                        placeholder="Pesquisar..."
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    />
                                    <SearchButton />
                                </div>
                            </form>
                        </div>
                        <QuotesContainer filter={debouncedFilter} />
                    </div>
                    <QuoteRegisterContainer />
                </div>
            </div>
        </DashboardLayout>
    );
}
