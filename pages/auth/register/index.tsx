import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import Link from 'next/link';
import { useState } from 'react';
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
import userPool from '../../../config/userPool';
import { useFocus } from '../../../hooks/useFocus';
import { ButtonType } from '../../../interfaces/enums';

const Register = () => {
    const [ givenName, setGivenName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');
    const [ inputRef ] = useFocus();

    const handleSubmit = (event) => {
        event.preventDefault();
        let givenNameAttribute: CognitoUserAttribute = new CognitoUserAttribute({
            Name: 'given_name', Value: givenName 
        });
        let emailAttribute: CognitoUserAttribute = new CognitoUserAttribute({ 
            Name: 'email', Value: email 
        });

        let cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

        userPool.signUp(email, password, [givenNameAttribute, emailAttribute], null, (err, data) => {
            if (err) {
                console.log(err);
            }

            cognitoUser.verifyAttribute("email", "", {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                },
                onFailure: (err) => {
                    console.error('onFailure: ', err);
                }
            });

            console.log(data);
        })
    }

    return (
        <AuthLayout title="Register | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500'>
                    <QuoteAppIcon />
                    <FormHeader title="Crie sua conta!!" subtitle="Será rápido e fácil..." />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="given_name">Nome</label>
                                <input 
                                    ref={inputRef}
                                    value={givenName} 
                                    onChange={(event) => setGivenName(event.target.value)} 
                                    type="text" 
                                    name="given_name" 
                                    id="given_name" 
                                    className="rounded w-full px-2 py-1 shadow-lg text-black" 
                                />
                            </div>
                            <EmailInput                                  
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)} 
                            />
                            <PasswordInput 
                                value={password} 
                                onChange={(event) => setPassword(event.target.value)} 
                            />
                            <div className='flex flex-col justify-center my-2'>
                                <label className='text-sm font-bold' htmlFor="confirmPassword">Confirmar Senha</label>
                                <input 
                                    value={confirmPassword} 
                                    onChange={(event) => setConfirmPassword(event.target.value)} 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="confirmPassword" 
                                    className="rounded w-full px-2 py-1 shadow-lg text-black" 
                                />
                            </div>
                            <br />
                            <Button buttonType={ButtonType.Register} />
                            <Link href="/auth/login" className='flex items-center my-2'>
                                <span className='text-sm underline font-extralight mr-1'>
                                    Já tem uma conta? Faça Login...
                                </span>
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
