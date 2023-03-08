import { FieldValues, UseFormRegister } from 'react-hook-form';

type Error = {
    message?: string;
}

export type InputProps = {
    name?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    register?: UseFormRegister<FieldValues>,
    inputRef?: React.LegacyRef<HTMLInputElement>,
    error?: Error
}

export type ChildrenProps = {
    children: React.ReactNode;
};

export type Quote = {
    id: string;
    title: string;
    description: string;
    date: string;
}
