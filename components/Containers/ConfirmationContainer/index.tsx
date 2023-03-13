import { useAuth } from "../../../contexts/AuthContext";
import { useCodeConfirmation } from "../../../contexts/CodeContext";
import { useFocus } from "../../../hooks/useFocus";
import { CodeInput } from "./CodeInput";

export const ConfirmationContainer = () => {
    const { user, resendConfirmationCode } = useAuth();
    const { code, handleCode } = useCodeConfirmation();
    const [ inputRef ] = useFocus();

    const handleChange = (event) => {
        if (event.target.value === "" || /^[0-9\b]+$/.test(event.target.value)) {
            handleCode(event.target.name, event.target.value);
            moveToNextInput();
        }
        return '';
    }

    const handleResendConfirmationCode = () => {
        resendConfirmationCode(user.email).then((data) => {
            alert('Sucesso! Verifique sua caixa de emails!!');
        }).catch((error) => {
            alert(`Ocorreu algum erro... ${error.message ?? error}`);
        });
    }

    const moveToNextInput = () => {
        const active = document.activeElement;
        if (active?.nextElementSibling) {
            (active.nextElementSibling as HTMLElement).focus();
        }
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
                <p>Não recebeu o código?</p>
                <button type="button" className="underline" onClick={handleResendConfirmationCode}>Reenviar</button>
            </div>
        </div>
    );
};
