import Image from 'next/image';
import Link from 'next/link';
import { QuoteAppIcon } from '../components';
import { GmailIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';
import Layout from '../components/Layouts/Layout';

import portfolioLogo from '../public/static/images/wm-logo.png';

const ContactPage = () => (
    <Layout title="Contato | Quote App">
        <div className="flex flex-col justify-around items-center pt-10">
            <h1 className="text-2xl font-black tracking-widest leading-normal drop-shadow-lg shadow-black">We've been waiting for you!</h1>
            <h2 className="tracking-wider">Let us know how we can help.</h2>
            <h3 className="font-bold underline">Contact us through any of our contact forms.</h3>
            <div className='flex flex-col p-4 bg-white text-black rounded-lg shadow-md shadow-black mt-10 gap-4'>
                <div className='flex items-center bg-primary-color rounded-lg shadow-md shadow-black py-2'>
                    <QuoteAppIcon />
                </div>
                <h1 className='text-center drop-shadow-md shadow-black'>Quote App</h1>
                <hr className='w-full'/>
                <div className='flex flex-col'>
                    <span>williansoares.dev@gmail.com</span>
                    <span>(77) 9 9979-1139</span>
                </div>
            </div>
            <div className='flex flex-col p-4 bg-white text-black rounded-lg shadow-md shadow-black mt-10 gap-2'>
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
                <div className='flex w-full justify-center'>
                    <Link href="http://willianmarciel.vercel.app" target="_blank">
                        <Image height={48} src={portfolioLogo} alt="Willian Portfolio Logo" />
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage;
