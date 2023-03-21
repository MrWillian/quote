import Layout from '../components/Layouts/Layout';
import { useTranslation } from "react-i18next";

const FAQPage = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t('faq.page_title')}>
            <div className="flex flex-col items-center justify-around pt-10">
                <h2 className="tracking-wider uppercase">{t('faq.title')}</h2>
                <h1 className="text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black">
                {t('faq.subtitle')}
                </h1>
                <div className='flex flex-col gap-4 p-4 mt-10 text-black bg-white divide-y rounded-lg shadow-md shadow-black'>
                    <div className='flex items-center py-2 rounded-lg shadow-md bg-primary-color shadow-black' />
                    <div className='flex items-center gap-5'>
                        <span className='text-xl font-black'>01</span>
                        <div>
                            <p className='text-xl font-bold'>{t('faq.first_question')}</p>
                            <p>{t('faq.first_answer')}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='text-xl font-black'>02</span>
                        <div>
                            <p className='text-xl font-bold'>{t('faq.second_question')}</p>
                            <p>{t('faq.second_answer')}</p>
                        </div>
                    </div>
                    <div className='flex items-center py-2 rounded-lg shadow-md bg-primary-color shadow-black' />
                </div>
            </div>
        </Layout>
    );
}

export default FAQPage;
