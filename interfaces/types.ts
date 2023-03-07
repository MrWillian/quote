import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
    name?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    register?: UseFormRegister<FieldValues>,
    inputRef?: React.LegacyRef<HTMLInputElement>
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
