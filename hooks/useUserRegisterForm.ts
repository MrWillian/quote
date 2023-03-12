import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, ref, string } from "yup";

export type UserRegisterProps = {
    givenName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

let schema = object().shape({
    givenName: string().required("O nome é obrigatório").min(3, "O nome deverá conter pelo menos 3 letras"),
    email: string().required("O email é obrigatório").email("Digite um email válido"),
    password: string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.\$%\^&\*])(?=.{8,})/, ""),
    confirmPassword: string().oneOf([ref('password')], 'Senhas não conferem'),
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
