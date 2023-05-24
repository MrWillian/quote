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
import { useTranslation } from "react-i18next";

export const UserRegisterForm = () => {
    const router = useRouter();
    const { signUp } = useAuth();
    const { register, handleSubmit, formState: { isSubmitting, errors }, setFocus } = useUserRegisterForm();
    const { t } = useTranslation();

    useEffect(() => {
        setFocus("givenName");
    }, [setFocus]);

    const onSubmit: SubmitHandler<UserRegisterProps> = async ({ givenName, email, password }) => {
        const result = await signUp(email, password, givenName);
        if (result.type === "success") {
            router.push('/auth/confirm');
            return;
        }
        alert(result.error);
        console.error("Error", result.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center my-2'>
                <label className='text-sm font-bold' htmlFor="givenName">{t('forms.name')}</label>
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
                <label className='text-sm font-bold' htmlFor="confirmPassword">{t('forms.confirm_password')}</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    className={`rounded w-full px-2 py-1 shadow-lg text-black ${errors.confirmPassword && 'border-2 border-red-500'}`}
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && <span className="font-thin text-red-500">{errors.confirmPassword.message}</span>}
            </div>
            <br />
            <Button buttonType={ButtonType.Register} isSubmitting={isSubmitting} />
            <Link href="/auth/login" className='flex items-center my-2'>
                <span className='mr-1 text-sm underline font-extralight'>
                    {t('register.already_have_an_account')}
                </span>
                <FcRight size={'1.5em'} color={'#282A37'} />
            </Link>
        </form>
    );
}
