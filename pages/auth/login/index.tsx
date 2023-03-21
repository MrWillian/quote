'use client'
import { AuthLayout, WriteDownContainer, FormHeader, QuoteAppIcon } from '../../../components';
import { LoginForm } from '../../../components/Forms';
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation();
    return (
        <AuthLayout title={t('login.page_title')}>
            <div className="flex items-center justify-center h-screen px-2 py-4">
                <WriteDownContainer />
                <section className='flex flex-col justify-center h-full mx-10 my-4 border-gray-500 border-r-5'>
                    <QuoteAppIcon />
                    <FormHeader 
                        title={t('login.title')} 
                        subtitle={t('login.subtitle')}
                    />
                    <LoginForm />
                </section>
            </div>
        </AuthLayout>
    );
}

export default Login;
