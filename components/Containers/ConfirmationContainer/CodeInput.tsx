import { InputProps } from "../../../interfaces/types";

export const CodeInput = ({ name, onChange, inputRef }: InputProps) => (
    <input 
        type="text"
        name={name}
        className="text-center h-16 w-1/6 text-5xl font-black text-accent-color rounded-md shadow-md"
        maxLength={1}
        ref={inputRef}
        onChange={onChange}
    />
);
