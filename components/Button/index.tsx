import React from 'react';
import { ButtonType } from '../../interfaces/enums';

type Props = {
    buttonType: ButtonType
}

export const Button = ({ buttonType }: Props) => (
  <button 
    type="submit"
    className="flex justify-center items-center w-full py-2 px-4 bg-accent-color rounded shadow-lg"
  >
    <span className="text-xl tracking-widest hover:tracking-tight uppercase font-semibold">{buttonType}</span>
  </button>
);
