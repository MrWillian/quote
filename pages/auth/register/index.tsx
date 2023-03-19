import { 
    AuthLayout,
    WriteDownContainer,
    FormHeader,
    QuoteAppIcon,
    UserRegisterForm
} from '../../../components';
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation();

    return (
        <AuthLayout title={t('register.page_title')}>
            <div className="flex items-center justify-center h-screen px-2 py-4">
                <section className='flex flex-col justify-center h-full mx-10 my-4 border-gray-500 border-r-5'>
                    <QuoteAppIcon />
                    <FormHeader title={t('register.title')} subtitle={t('register.subtitle')} />
                    <UserRegisterForm />
                </section>
                <WriteDownContainer />
            </div>
        </AuthLayout>
    );
}

export default Register;
