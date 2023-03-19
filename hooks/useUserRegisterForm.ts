import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, ref, string } from "yup";
import i18n from 'i18next';

export type UserRegisterProps = {
    givenName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

let schema = object().shape({
    givenName: string().required(i18n.t('forms.required_name')).min(3, i18n.t('forms.minimun_name')),
    email: string().required(i18n.t('forms.required_email')).email(i18n.t('forms.valid_email')),
    password: string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.\$%\^&\*])(?=.{8,})/, ""),
    confirmPassword: string().oneOf([ref('password')], i18n.t('forms.do_not_match_confirm_password')),
});

export const useUserRegisterForm = () => useForm<UserRegisterProps>({ 
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        givenName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
});
