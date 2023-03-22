import { useState } from 'react';
import { DashboardHeader, DashboardLayout, QuoteRegisterContainer, QuotesContainer, SearchButton } from '../../components';
import { useTranslation } from "react-i18next";
import { useDebounce } from '../../hooks/useDebounce';

export default function Home() {
    const [filter, setFilter] = useState('');
    const { t } = useTranslation();
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
                                        placeholder={t('dashboard.search')}
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
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147711301878242"
                        crossOrigin="anonymous"></script>
                    <ins className="adsbygoogle"
                        style={{display: 'block'}}
                        data-ad-client="ca-pub-2147711301878242"
                        data-ad-slot="8906500572"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147711301878242"
                    crossOrigin="anonymous">
                </script>
                <ins 
                    className="adsbygoogle"
                    style={{display:'inline-block', width:728, height:90}}
                    data-ad-client="ca-pub-2147711301878242"
                    data-ad-slot="3149393977">
                </ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </DashboardLayout>
    );
}
