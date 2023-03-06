import { useState } from 'react';
import { DashboardHeader, DashboardLayout, QuoteRegisterContainer, QuotesContainer, SearchButton } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';

export default function Home() {
    const [filter, setFilter] = useState('');
    const debouncedFilter = useDebounce(filter, 500);

    return (
        <DashboardLayout>
            <div className="flex flex-col p-8 w-screen">
                <DashboardHeader />
                <div className="flex">
                    <div className='w-3/4 md:w-2/4 h-3/4'>
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
