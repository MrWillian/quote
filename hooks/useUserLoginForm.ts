import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import i18n from 'i18next';

export type UserLoginProps = {
    email?: string;
    password?: string;
}

let schema = object().shape({
    email: string().required(i18n.t('forms.required_email')).email(i18n.t('forms.valid_email')),
    password: string().required(i18n.t('forms.required_password')).min(8),
});

export const useUserLoginForm = () => useForm<UserLoginProps>({ 
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        email: '',
        password: ''
    }
});
