import Link from 'next/link';
import { FcRight } from 'react-icons/fc';
import { 
    AuthLayout,
    WriteDownContainer,
    FormHeader,
    QuoteAppIcon,
    EmailInput,
    PasswordInput,
    Button
} from '../../../components';
import { useFocus } from '../../../hooks/useFocus';
import { ButtonType } from '../../../interfaces/enums';
import { useAuth } from '../../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { SubmitHandler } from "react-hook-form";
import { useUserLoginForm, UserLoginProps } from '../../../hooks/useUserLoginForm';

const Login = () => {    
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useUserLoginForm();
    const router = useRouter();
    const { login } = useAuth();
    const [ inputRef ] = useFocus();

    const onSubmit: SubmitHandler<UserLoginProps> = async ({ email, password }) => {
        await login(email, password).then(() => {
            router.replace('/dashboard');
        }).catch((error) => {
            alert(`Ocorreu algum erro... ${error.message ?? error}`);
        });
    }

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
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <EmailInput inputRef={inputRef} {...register('email')} error={errors.email} />
                            <PasswordInput {...register('password')} error={errors.password} isLoginForm={true} />
                            <div className="flex justify-between items-center mb-6">
                                <div className="items-center flex">
                                    <input type="checkbox" id="rememberme" name="rememberme" />
                                    <label className='text-sm' htmlFor="rememberme">Lembrar</label>
                                </div>
                                <div className="items-center">
                                    <a href="#" className='text-sm underline font-extralight'>Esqueceu a senha?</a>
                                </div>
                            </div>
                            <Button buttonType={ButtonType.Login} isSubmitting={isSubmitting} />
                            <Link href="/auth/register" className='flex items-center my-2'>
                                <span className='text-sm underline font-extralight mr-1'>Precisa de uma conta?</span>
                                <FcRight size={'1.5em'} color={'#282A37'} />
                            </Link>
                        </form>
                    </div>
                </section>
            </div>
        </AuthLayout>
    );
}

export default Login;
