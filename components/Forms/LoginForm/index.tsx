import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";
import { FcRight } from "react-icons/fc";
import { useAuth } from "../../../contexts/AuthContext";
import { useFocus } from "../../../hooks/useFocus";
import { UserLoginProps, useUserLoginForm } from "../../../hooks/useUserLoginForm";
import { ButtonType } from "../../../interfaces/enums";
import { Button } from "../../Buttons";
import { EmailInput, PasswordInput } from "../../Inputs";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useUserLoginForm();
    const { user, login, resendConfirmationCode } = useAuth();
    const [ inputRef ] = useFocus();
    const router = useRouter();
    const { t } = useTranslation();

    const onSubmit: SubmitHandler<UserLoginProps> = async ({ email, password }) => {
        const result = await login(email, password);
        if (result.type === 'success') {
            router.replace('/dashboard');
            return;
        }
        if (result.error.code === 'UserNotConfirmedException') {
            user.email = email;
            resendConfirmationCode(email).then(() => {
                alert(t('forms.error_user_not_confirmed'));
                router.replace('/auth/confirm');
            }).catch((error) => {
                alert(`${t('forms.error')} ${error.message ?? error}`);
            });
            return;
        }
        alert(result.error.message);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput inputRef={inputRef} {...register('email')} error={errors.email} />
            <PasswordInput {...register('password')} error={errors.password} isLoginForm={true} />
            {/* <div className="flex justify-between items-center mb-6">
                <div className="items-center flex">
                    <input type="checkbox" id="rememberme" name="rememberme" />
                    <label className='text-sm' htmlFor="rememberme">Lembrar</label>
                </div>
                <div className="items-center">
                    <a href="#" className='text-sm underline font-extralight'>Esqueceu a senha?</a>
                </div>
            </div> */}
            <br />
            <Button buttonType={ButtonType.Login} isSubmitting={isSubmitting} />
            <Link href="/auth/register" className='flex items-center my-2'>
                <span className='text-sm underline font-extralight mr-1'>{t('login.need_an_account')}</span>
                <FcRight size={'1.5em'} color={'#282A37'} />
            </Link>
        </form>
    );
}
