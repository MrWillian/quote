import { useAuth } from "../../../contexts/AuthContext";
import { useCodeConfirmation } from "../../../contexts/CodeContext";
import { useFocus } from "../../../hooks/useFocus";
import { moveToNextInput } from "../../../utils/moveToNextInput";
import { CodeInput } from "./CodeInput";
import { useTranslation } from "react-i18next";

export const ConfirmationContainer = () => {
    const { user, resendConfirmationCode } = useAuth();
    const { code, handleCode } = useCodeConfirmation();
    const [ inputRef ] = useFocus();
    const { t } = useTranslation();

    const handleChange = (event) => {
        if (event.target.value === "" || /^[0-9\b]+$/.test(event.target.value)) {
            handleCode(event.target.name, event.target.value);
            moveToNextInput();
        }
        return '';
    }

    const handleResendConfirmationCode = () => {
        resendConfirmationCode(user.email).then((data) => {
            alert(t('confirm.success_resend'));
        }).catch((error) => {
            alert(`${t('common.error_ocurred')} ${error.message ?? error}`);
        });
    }

    return (
        <div className="my-8">
            <div className="flex items-center gap-4">
                <CodeInput 
                    inputRef={inputRef}
                    name={'0'}
                    value={code[0]}
                    onChange={handleChange}
                />
                <CodeInput name={'1'} value={code[1]} onChange={handleChange} />
                <CodeInput name={'2'} value={code[2]} onChange={handleChange} />
                <CodeInput name={'3'} value={code[3]} onChange={handleChange} />
                <CodeInput name={'4'} value={code[4]} onChange={handleChange} />
                <CodeInput name={'5'} value={code[5]} onChange={handleChange} />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <p>{t('confirm.do_not_receive')}</p>
                <button type="button" className="underline" onClick={handleResendConfirmationCode}>{t('confirm.resend')}</button>
            </div>
        </div>
    );
};
