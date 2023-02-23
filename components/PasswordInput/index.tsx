import { InputProps } from "../../interfaces/types";

export const PasswordInput = ({ value, onChange }: InputProps) => (
    <div className='flex flex-col justify-center my-2'>
        <label className='text-sm font-bold' htmlFor="password">Senha</label>
        <input 
            type="password" 
            name="password" 
            value={value}
            onChange={onChange}
            className="rounded w-full px-2 py-1 shadow-lg text-black"
        />
    </div>
);
