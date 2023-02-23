import { InputProps } from "../../interfaces/types";

export const EmailInput = ({ value, onChange, inputRef }: InputProps) => (
    <div className='flex flex-col justify-center my-2'>
        <label className='text-sm font-bold' htmlFor="email">Email</label>
        <input 
            type="email" 
            name="email" 
            value={value}
            onChange={onChange}
            ref={inputRef} 
            className="rounded w-full px-2 py-1 shadow-lg text-black"
        />
    </div>
);
