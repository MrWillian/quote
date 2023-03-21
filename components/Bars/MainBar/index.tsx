import Link from "next/link"
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../../LanguageSelector";
import { QuoteAppIcon } from "../../QuoteAppIcon";

export const MainBar = () => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <nav className="flex items-center justify-between px-4 py-4 font-bold tracking-widest uppercase">
            <Link href="/">
                <QuoteAppIcon />
            </Link>
            <div className="flex justify-around items-center w-1/2">
                <Link href="/contact" className={`hover:underline ${router.pathname === '/contact' && 'underline'}`}>{t('home.contact')}</Link>
                <Link href="/faq" className={`hover:underline ${router.pathname === '/faq' && 'underline'}`}>{t('home.faq')}</Link>
                <div className="flex items-center justify-between gap-2">
                    <Link href="/auth/login" className="hover:underline">{t('common.button_signin')}</Link>
                    <span className="font-thin">{'|'}</span>
                    <a href="/auth/register" className="hover:underline">{t('common.button_signup')}</a>
                </div>
                {/* <LanguageSelector /> */}
            </div>
        </nav>
    );
}
