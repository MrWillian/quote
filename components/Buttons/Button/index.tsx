import React from 'react';
import { ButtonType } from '../../../interfaces/enums';
import { SpinnerIcon } from '../../Icons';

type Props = {
  buttonType: ButtonType,
  isSubmitting?: boolean
}

export const Button = ({ buttonType, isSubmitting }: Props) => {
  const accentColor = buttonType !== ButtonType.Cancel ? 'bg-accent-color' : 'bg-white';
  const fontColor = buttonType !== ButtonType.Cancel ? 'text-white' : 'text-accent-color';

  return (
    <button 
      type="submit"
      className={`flex justify-center items-center w-full py-2 px-4 ${accentColor} rounded shadow-lg`}
      disabled={isSubmitting}
    >
      {isSubmitting ?
        <SpinnerIcon color="#FFFFFF" />
        :
        <span className={`text-xl tracking-widest hover:tracking-tight uppercase font-semibold ${fontColor}`}>
          {buttonType}
        </span>
      }
    </button>
  );
};
