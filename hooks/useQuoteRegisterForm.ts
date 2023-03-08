import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, date } from 'yup';

let schema = object().shape({
    title: string().required().min(2),
    description: string().required().min(2),
    date: date().required(),
});

export const useQuoteRegisterForm = () => useForm({ 
    mode: 'all', 
    resolver: yupResolver(schema),
    defaultValues: {
        title: '',
        description: '',
        date: new Date().toISOString().substr(0, 10)
    }
});
