import React from "react";
import { InputProps } from "../../../interfaces/types";

export const EmailInput = React.forwardRef(
    ({ value, onChange, register, inputRef, error, ...rest }: InputProps, 
    ref: React.Ref<HTMLInputElement>
) => (
    <div className='flex flex-col justify-center my-2' ref={ref}>
        <label className='text-sm font-bold' htmlFor="email">Email</label>
        <input 
            type="email" 
            name="email" 
            value={value}
            onChange={onChange}
            ref={inputRef} 
            className={`rounded w-full px-2 py-1 shadow-lg text-black ${error && 'border-2 border-red-500'}`}
            {...rest}
        />
        {error && <span className="font-thin text-red-500">{error.message}</span>}
    </div>
));
