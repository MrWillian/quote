import React from 'react';
import { useTranslation } from "react-i18next";
import { ButtonType } from '../../../interfaces/enums';
import { SpinnerIcon } from '../../Icons';

type Props = {
  buttonType: ButtonType,
  isSubmitting?: boolean
}

export const Button = ({ buttonType, isSubmitting }: Props) => {
  const { t } = useTranslation();
  const accentColor = buttonType !== ButtonType.Cancel ? 'bg-accent-color' : 'bg-white';
  const fontColor = buttonType !== ButtonType.Cancel ? 'text-white' : 'text-accent-color';

  const getTypeText = (type: ButtonType) => {
    switch (type) {
      case ButtonType.Login:
        return t('common.button_signin');
      case ButtonType.Register:
        return t('common.button_signup');
      case ButtonType.Cancel:
        return t('common.button_cancel');
      case ButtonType.Verify:
        return t('common.button_verify');
      case ButtonType.Delete:
        return t('common.button_delete');
    }
  }

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
          {getTypeText(buttonType)}
        </span>
      }
    </button>
  );
};
