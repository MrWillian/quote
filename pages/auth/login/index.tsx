import Image from 'next/image';
import Link from 'next/link';
import { FcRight } from 'react-icons/fc';
import { AuthLayout, LoginButton, SocialLoginButton, WriteDownContainer } from '../../../components';
import { useFocus } from '../../../hooks/useFocus';

import icon from '../../../public/static/QuoteApp.png';

const Login = () => {
    const [ inputRef ] = useFocus();

    return (
        <AuthLayout title="Login | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <WriteDownContainer />
                <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500'>
                    <div className='flex w-full justify-center items-start'>
                        <Image 
                            className='flex items-center'
                            src={icon} 
                            alt="Quote App Icon" 
                            width={60} 
                            height={60} 
                        />
                    </div>
                    <div className='py-4 mt-4'>
                        <h1 className="text-6xl font-black">Hey, hello!!</h1>
                        <h2 className="text-2xl font-semibold mt-1">Entre com os dados informados quando você se registrou...</h2>
                    </div>
                    <div>
                        <form>
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="email">Email</label>
                                <input type="email" name="email" ref={inputRef} className="rounded w-full px-2 py-1 shadow-lg text-black" />
                            </div>
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="password">Senha</label>
                                <input type="password" name="password" className="rounded w-full px-2 py-1 shadow-lg text-black" />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="items-center flex">
                                    <input type="checkbox" id="rememberme" name="rememberme" />
                                    <label className='text-sm' htmlFor="rememberme">Lembrar</label>
                                </div>
                                <div className="items-center">
                                    <a href="#" className='text-sm underline font-extralight'>Esqueceu a senha?</a>
                                </div>
                            </div>
                            <LoginButton />
                            <hr className='my-4' />
                            <SocialLoginButton />
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
