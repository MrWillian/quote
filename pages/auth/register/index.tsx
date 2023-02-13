import Link from 'next/link';
import { FcRight } from 'react-icons/fc';
import { AuthLayout, RegisterButton, WriteDownContainer, FormHeader, QuoteAppIcon, EmailInput } from '../../../components';
import { useFocus } from '../../../hooks/useFocus';

const Register = () => {
    const [ inputRef ] = useFocus();

    return (
        <AuthLayout title="Register | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500'>
                    <QuoteAppIcon />
                    <FormHeader title="Crie sua conta!!" subtitle="Será rápido e fácil..." />
                    <div>
                        <form>
                            <EmailInput inputRef={inputRef} />
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="password">Senha</label>
                                <input type="password" name="password" id="password" className="rounded w-full px-2 py-1 shadow-lg text-black" />
                            </div>
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="confirmPassword">Confirmar Senha</label>
                                <input type="password" name="confirmPassword" id="confirmPassword" className="rounded w-full px-2 py-1 shadow-lg text-black" />
                            </div>
                           
                            <br />
                            <RegisterButton />
                            <Link href="/auth/login" className='flex items-center my-2'>
                                <span className='text-sm underline font-extralight mr-1'>Já tem uma conta? Faça Login...</span>
                                <FcRight size={'1.5em'} color={'#282A37'} />
                            </Link>
                        </form>
                    </div>
                </section>
                <WriteDownContainer />
            </div>
        </AuthLayout>
    );
}

export default Register;
