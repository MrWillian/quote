import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { 
    AuthLayout,
    WriteDownContainer,
    FormHeader,
    QuoteAppIcon,
    Button,
    ConfirmationContainer,
} from '../../../components';
import { useAuth } from '../../../contexts/AuthContext';
import { useCodeConfirmation } from '../../../contexts/CodeContext';
import { ButtonType } from '../../../interfaces/enums';
import { useTranslation } from "react-i18next";

const Confirm = () => {
    const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);
    const { user, confirmCode } = useAuth();
    const { getCode, clearCode } = useCodeConfirmation();
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            router.push('/auth/register');
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const code = getCode();
        setIsSubmitting(true);
        const result = await confirmCode(user.email, code);
        if (result.type === 'success') {
            alert(t('confirm.success'));
            setIsSubmitting(false);
            clearCode();
            router.push('/dashboard');
            return;
        }
        alert(`${t('common.error_ocurred')} ${result.error.message ?? result.error}`);
        setIsSubmitting(false);
    }

    return (
        <AuthLayout title={t('confirm.page_title')}>
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <section 
                    className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500 w-1/2'
                >
                    <QuoteAppIcon />
                    <FormHeader 
                        title={t('confirm.title')}
                        subtitle={`${t('confirm.subtitle')} ${user.email}`}
                    />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <ConfirmationContainer />
                            <div className='flex items-center justify-center gap-6'>
                                {/* <Button buttonType={ButtonType.Cancel} /> */}
                                <Button buttonType={ButtonType.Verify} isSubmitting={isSubmitting} />
                            </div>
                        </form>
                    </div>
                </section>
                <WriteDownContainer />
            </div>
        </AuthLayout>
    );
}

export default Confirm;
