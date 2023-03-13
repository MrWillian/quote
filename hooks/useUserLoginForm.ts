import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

export type UserLoginProps = {
    email?: string;
    password?: string;
}

let schema = object().shape({
    email: string().required("O email é obrigatório").email("Digite um email válido"),
    password: string().required("A senha é obrigatória").min(8),
});

export const useUserLoginForm = () => useForm<UserLoginProps>({ 
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        email: '',
        password: ''
    }
});
