import React from "react";
import { useTranslation } from "react-i18next";
import { InputProps } from "../../../interfaces/types";

export const PasswordInput = React.forwardRef(
    ({ value, onChange, register, error, isLoginForm, ...rest }: InputProps,
    ref: React.Ref<HTMLInputElement>
) =>  {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col justify-center my-2 w-full' ref={ref}>
            <label className='text-sm font-bold' htmlFor="password">{t('forms.password')}</label>
            <input 
                type="password" 
                name="password" 
                value={value}
                onChange={onChange}
                className={`rounded px-2 py-1 shadow-lg text-black ${error && 'border-2 border-red-500'}`}
                {...rest}
            />
            {error && !isLoginForm ?
                <span className="font-thin text-red-500">
                    {t('forms.password_requires_1')} <br />
                    * {t('forms.password_requires_2')} <br />
                    * {t('forms.password_requires_3')} <br />
                    * {t('forms.password_requires_4')} <br />
                    * {t('forms.password_requires_5')}
                </span>
                :
                <></>
            }
            {error && isLoginForm ?
                <span className="font-thin text-red-500">{t('forms.required_password_and_min_char')}</span>
                : <></>
            }
        </div>
    )
});
