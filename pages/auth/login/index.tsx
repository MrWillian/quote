import { AuthLayout, WriteDownContainer, FormHeader, QuoteAppIcon } from '../../../components';
import { LoginForm } from '../../../components/Forms';

const Login = () => {
    return (
        <AuthLayout title="Login | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <WriteDownContainer />
                <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500'>
                    <QuoteAppIcon />
                    <FormHeader 
                        title="Hey, hello!!" 
                        subtitle="Entre com os dados informados quando você se registrou..."
                    />
                    <LoginForm />
                </section>
            </div>
        </AuthLayout>
    );
}

export default Login;
