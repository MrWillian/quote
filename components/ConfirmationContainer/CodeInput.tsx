import { InputProps } from "../../interfaces/types";

export const CodeInput = ({ inputRef }: InputProps) => (
    <input 
        type="text"
        className="text-center h-16 w-1/6 text-5xl font-black text-accent-color rounded-md shadow-md"
        maxLength={1}
        ref={inputRef}
    />
);
