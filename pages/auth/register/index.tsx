import Image from 'next/image';
import Link from 'next/link';
import { FcRight } from 'react-icons/fc';
import AuthLayout from '../../../components/AuthLayout';
import { RegisterButton } from '../../../components/RegisterButton';
import { SocialLoginButton } from '../../../components/SocialLoginButton';
import { WriteDownContainer } from '../../../components/WriteDownContainer';

import icon from '../../../public/static/QuoteApp.png';

const Register = () => {
    return (
        <AuthLayout title="Login | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500'>
                    <div className='flex w-full items-start'>
                        <Image 
                            className='flex items-center'
                            src={icon} 
                            alt="Quote App Icon" 
                            width={60} 
                            height={60} 
                        />
                    </div>
                    <div className='py-4 mt-4'>
                        <h1 className="text-6xl font-black">Crie sua conta!!</h1>
                        <h2 className="text-2xl font-semibold mt-1">Será rápido e fácil...</h2>
                    </div>
                    <div>
                        <form>
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="rounded w-full px-2 py-1 shadow-lg text-black" />
                            </div>
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
