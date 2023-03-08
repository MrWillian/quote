import React from "react";
import { InputProps } from "../../../interfaces/types";

export const PasswordInput = React.forwardRef(
    ({ value, onChange, register, error, ...rest }: InputProps,
    ref: React.Ref<HTMLInputElement>
) => (
    <div className='flex flex-col justify-center my-2 w-full' ref={ref}>
        <label className='text-sm font-bold' htmlFor="password">Senha</label>
        <input 
            type="password" 
            name="password" 
            value={value}
            onChange={onChange}
            className={`rounded px-2 py-1 shadow-lg text-black ${error && 'border-2 border-red-500'}`}
            {...rest}
        />
        {error && 
            <span className="font-thin text-red-500">
                A senha é obrigatória e deverá conter pelo menos 8 caracteres, entre eles: <br />
                * um número <br />
                * um caractere especial (!@#$%^&*)<br />
                * uma letra maiúscula <br />
                * uma letra minúscula
            </span>
        }
    </div>
));
