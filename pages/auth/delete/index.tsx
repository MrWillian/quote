'use client'
import { AuthLayout, WriteDownContainer, FormHeader, QuoteAppIcon } from '../../../components';
import { DeleteForm } from '../../../components/Forms';
import { useTranslation } from "react-i18next";

const DeleteUser = () => {
    const { t } = useTranslation();
    return (
        <AuthLayout title={t('delete.page_title')}>
            <div className="flex items-center justify-center h-screen px-2 py-4">
                <WriteDownContainer />
                <section className='flex flex-col justify-center h-full mx-10 my-4 border-gray-500 border-r-5'>
                    <QuoteAppIcon />
                    <FormHeader 
                        title={t('delete.title')} 
                        subtitle={t('delete.subtitle')}
                    />
                    <DeleteForm />
                </section>
            </div>
        </AuthLayout>
    );
}

export default DeleteUser;
