import React from 'react';
import { ButtonType } from '../../../interfaces/enums';

type Props = {
  buttonType: ButtonType
}

export const Button = ({ buttonType }: Props) => {
  const accentColor = buttonType !== ButtonType.Cancel ? 'bg-accent-color' : 'bg-white';
  const fontColor = buttonType !== ButtonType.Cancel ? 'text-white' : 'text-accent-color';

  return (
    <button 
      type="submit"
      className={`flex justify-center items-center w-full py-2 px-4 ${accentColor} rounded shadow-lg`}
    >
      <span className={`text-xl tracking-widest hover:tracking-tight uppercase font-semibold ${fontColor}`}>
        {buttonType}
      </span>
    </button>
  );
};
