import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { FcRight } from "react-icons/fc";
import { useAuth } from "../../../contexts/AuthContext";
import { UserRegisterProps, useUserRegisterForm } from "../../../hooks/useUserRegisterForm";
import { ButtonType } from "../../../interfaces/enums";
import { Button } from "../../Buttons";
import { EmailInput, PasswordInput } from "../../Inputs";

export const UserRegisterForm = () => {
    const router = useRouter();
    const { signUp } = useAuth();
    const { register, handleSubmit, formState: { errors }, setFocus } = useUserRegisterForm();

    useEffect(() => {
        setFocus("givenName");
    }, [setFocus]);

    const onSubmit: SubmitHandler<UserRegisterProps> = ({ givenName, email, password }) => {
        let givenNameAttribute: CognitoUserAttribute = new CognitoUserAttribute({
            Name: 'given_name', Value: givenName 
        });
        let emailAttribute: CognitoUserAttribute = new CognitoUserAttribute({ 
            Name: 'email', Value: email 
        });

        signUp(email, password, [givenNameAttribute, emailAttribute]).then((data) => {
            console.log("Success", data);
            router.push('/auth/confirm');
        }).catch((error) => {
            console.error("Error", error);
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center my-2'>
                <label className='text-sm font-bold' htmlFor="givenName">Nome</label>
                <input 
                    type="text"
                    className={`rounded w-full px-2 py-1 shadow-lg text-black ${errors.givenName && 'border-2 border-red-500'}`}
                    {...register('givenName')}
                />
                {errors.givenName && <span className="font-thin text-red-500">{errors.givenName.message}</span>}
            </div>
            <EmailInput {...register('email')} error={errors.email} />
            <PasswordInput {...register('password')} error={errors.password} />
            <div className='flex flex-col justify-center my-2'>
                <label className='text-sm font-bold' htmlFor="confirmPassword">Confirmar Senha</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    className={`rounded w-full px-2 py-1 shadow-lg text-black ${errors.confirmPassword && 'border-2 border-red-500'}`}
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && <span className="font-thin text-red-500">{errors.confirmPassword.message}</span>}
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
    );
}
