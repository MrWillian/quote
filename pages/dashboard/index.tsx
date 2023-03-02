import { useEffect, useState } from 'react';
import { DashboardLayout, QuoteRegisterContainer, QuotesContainer } from '../../components';
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
    const [name, setName] = useState('');
    const { getName } = useAuth();

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
                                        className="py-2 px-6 w-full placeholder:text-white font-bold text-lg rounded shadow-2xl bg-accent-color focus:outline-none focus:bg-white focus:text-accent-color"
                                        type="text" 
                                        placeholder="Pesquisar..."
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                viewBox="0 0 24 24"
                                                className="w-6 h-6"
                                            >
                                                <path color="#FFFFFF" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <QuotesContainer />
                    </div>

                    <QuoteRegisterContainer />
                </div>
            </div>
        </DashboardLayout>
    );
}
