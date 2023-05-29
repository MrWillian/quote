import { useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import { QuoteAppIcon } from "../../QuoteAppIcon";
import useAuthenticatedUser from '../../../hooks/useAuthenticatedUser';
import { LanguageSelector } from "../../LanguageSelector";

export const MainBar = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [hasAuthenticatedUser] = useAuthenticatedUser();

    useEffect(() => {
        if (hasAuthenticatedUser) router.push('/dashboard');
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 py-4 font-bold tracking-widest uppercase">
            <Link href="/">
                <QuoteAppIcon />
            </Link>
            <div className="flex items-center justify-around w-1/2">
                <Link href="/contact" className={`hover:underline ${router.pathname === '/contact' && 'underline'}`}>{t('home.contact')}</Link>
                <div className="flex items-center justify-between gap-2">    
                    <Link href="/faq" className={`hover:underline ${router.pathname === '/faq' && 'underline'}`}>{t('home.faq')}</Link>
                    <span className="font-thin">{'|'}</span>
                    <Link href="/privacy" className={`hover:underline ${router.pathname === '/privacy' && 'underline'}`}>{t('home.privacy_policy')}</Link>
                </div>
                {!hasAuthenticatedUser ? (
                    <div className="flex items-center justify-between gap-2">
                        <Link href="/auth/login" className="hover:underline">{t('common.button_signin')}</Link>
                        <span className="font-thin">{'|'}</span>
                        <a href="/auth/register" className="hover:underline">{t('common.button_signup')}</a>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <Link href="/dashboard" className="hover:underline">{t('dashboard.menu')}</Link>
                    </div>
                )}
                {/* <LanguageSelector /> */}
            </div>
        </nav>
    );
}
