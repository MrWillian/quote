import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { FcRight } from "react-icons/fc";
import { useAuth } from "../../../contexts/AuthContext";
import { useFocus } from "../../../hooks/useFocus";
import { UserLoginProps, useUserLoginForm } from "../../../hooks/useUserLoginForm";
import { ButtonType } from "../../../interfaces/enums";
import { Button } from "../../Buttons";
import { EmailInput, PasswordInput } from "../../Inputs";
import { useTranslation } from "react-i18next";

export const DeleteForm = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useUserLoginForm();
    const { login, deleteUser } = useAuth();
    const [ inputRef ] = useFocus();
    const { t } = useTranslation();

    const onSubmit: SubmitHandler<UserLoginProps> = async ({ email, password }) => {
        await login(email, password).then((data) => {
            handleDelete(data);
        }).catch((error) => {
            if (error.code == 'NotAuthorizedException') {
                alert(t('forms.error_password'));
                return;
            } else if (error.code == 'ResourceNotFoundException') {
                alert(t('forms.error_user_not_found'));
                return;
            }
            alert(`${t('forms.error')} ${error.message ?? error}`);
        });
    }

    const handleDelete = async (data: any) => {
        const result = await deleteUser();
        if (result.type === 'success') {
            alert(result.message);
            return;
        }
        alert(result.error.message);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput inputRef={inputRef} {...register('email')} error={errors.email} />
            <PasswordInput {...register('password')} error={errors.password} isLoginForm={true} />
            <br />
            <Button buttonType={ButtonType.Delete} isSubmitting={isSubmitting} />
            <Link href="/auth/register" className='flex items-center my-2'>
                <span className='mr-1 text-sm underline font-extralight'>{t('login.need_an_account')}</span>
                <FcRight size={'1.5em'} color={'#282A37'} />
            </Link>
        </form>
    );
}
