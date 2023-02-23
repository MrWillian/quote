export type InputProps = {
    name?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    inputRef?: React.LegacyRef<HTMLInputElement>
}

export type ChildrenProps = {
    children: React.ReactNode;
};
