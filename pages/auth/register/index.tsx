import { 
    AuthLayout,
    WriteDownContainer,
    FormHeader,
    QuoteAppIcon,
    UserRegisterForm
} from '../../../components';

const Register = () => (
    <AuthLayout title="Register | Quote App">
        <div className="flex items-center justify-center py-4 px-2 h-screen">
            <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500'>
                <QuoteAppIcon />
                <FormHeader title="Crie sua conta!!" subtitle="Será rápido e fácil..." />
                <UserRegisterForm />
            </section>
            <WriteDownContainer />
        </div>
    </AuthLayout>
);

export default Register;
