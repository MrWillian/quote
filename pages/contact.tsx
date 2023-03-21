import Image from 'next/image';
import Link from 'next/link';
import { QuoteAppIcon } from '../components';
import { GmailIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';
import Layout from '../components/Layouts/Layout';
import { useTranslation } from "react-i18next";
import portfolioLogo from '../public/static/images/wm-logo.png';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t('contact.page_title')}>
            <div className="flex flex-col items-center justify-around pt-10">
                <h1 className="text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black">
                    {t('contact.title')}
                </h1>
                <h2 className="tracking-wider">{t('contact.subtitle')}</h2>
                <h3 className="font-bold underline">{t('contact.info')}</h3>
                <div className='flex flex-col gap-4 p-4 mt-10 text-black bg-white rounded-lg shadow-md shadow-black'>
                    <div className='flex items-center py-2 rounded-lg shadow-md bg-primary-color shadow-black'>
                        <QuoteAppIcon />
                    </div>
                    <h1 className='text-center drop-shadow-md shadow-black'>Quote App</h1>
                    <hr className='w-full'/>
                    <div className='flex flex-col'>
                        <span>williansoares.dev@gmail.com</span>
                        <span>(77) 9 9979-1139</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-4 mt-5 text-black bg-white rounded-lg shadow-md shadow-black'>
                    <div className='flex gap-4'>
                        <Link href="https://www.instagram.com/will.tsx/" target="_blank">
                            <InstagramIcon />
                        </Link>
                        <Link href="mailto:williansoares.dev@gmail.com" target="_blank">
                            <GmailIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/willian-marciel" target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </div>
                    <div className='flex justify-center w-full'>
                        <Link href="http://willianmarciel.vercel.app" target="_blank">
                            <Image height={48} src={portfolioLogo} alt="Willian Portfolio Logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;
