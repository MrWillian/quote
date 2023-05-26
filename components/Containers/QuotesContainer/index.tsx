import { useEffect, useRef, useState } from "react";
import { useQueryQuotes } from "../../../hooks/useQueryQuotes";
import { deleteQuote } from "../../../lib/deleteQuote";
import { useTranslation } from "react-i18next";

type Props = {
    filter?: string
}

export const QuotesContainer = ({ filter }: Props) => {
    const [scrollTopPosition, setScrollTopPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { data, isLoading, error } = useQueryQuotes(filter);
    const { t } = useTranslation();

    useEffect(() => {
        containerRef.current?.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            containerRef.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const { scrollTop } = containerRef.current;
        //const position = scrollHeight - scrollTop - clientHeight;
        setScrollTopPosition(scrollTop);
    };

    const handleDelete = async (id: string) => {
        const result = await deleteQuote(id);
        if (result.status === '200') {
            alert(t('common.success_delete'));
        }

        if (result.errorMessage) {
            alert(t('dashboard.error_on_delete'));
        }
    }

    if (error) alert(t('dashboard.error_on_load'));

    return (
        <div 
            ref={containerRef}
            className="flex flex-col relative justify-start no-scrollbar overflow-y-auto h-full bg-accent-color rounded divide-y divide-gray-500 shadow-md"
        >
            {!isLoading ? (
                data?.length > 0 ? 
                    data?.map(quote => (
                        <div className="flex justify-between items-center hover:border-b-[1px]" key={quote.id}>
                            <div className='flex justify-center flex-col p-2 w-4/5'>
                                <h1 className="text-xl font-black">{quote.title}</h1>
                                <h3>{quote.description}</h3>
                            </div>
                            <div className='flex flex-col justify-between p-2 w-1/5'>
                                <h3 className="text-xs self-center w-1/2">{quote.date}</h3>
                                <button className='text-xs bg-primary-color rounded shadow' onClick={() => handleDelete(quote.id)}>
                                    {t('common.delete')}
                                </button>
                            </div>
                        </div>
                    ))
                    : <h1 className="p-4">{t('common.no_memories')}</h1>
                )
                : (<p className="p-4">{t('common.loading')}</p>)
            }
            {data?.length > 6 && scrollTopPosition < 1 &&
                <div className="flex w-full justify-center items-center">
                    <button className="flex justify-center items-center animate-bounce bg-primary-color shadow absolute bottom-1 rounded-full w-10 h-10" disabled>
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" viewBox="0 0 256 256">
                            <g transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)">
                                <path 
                                    fill="#8B5CF6"
                                    d="M 46.969 89.104 c -1.041 1.194 -2.897 1.194 -3.937 0 L 13.299 54.989 c -0.932 -1.072 -0.171 -2.743 1.25 -2.743 h 14.249 V 1.91 c 0 -1.055 0.855 -1.91 1.91 -1.91 h 28.584 c 1.055 0 1.91 0.855 1.91 1.91 v 50.336 h 14.249 c 1.421 0 2.182 1.671 1.25 2.743 L 46.969 89.104 z" 
                                    transform=" matrix(1 0 0 1 0 0) " 
                                    strokeLinecap="round" 
                                />
                            </g>
                        </svg>
                    </button>
                </div>
            }
        </div>
    );
}
