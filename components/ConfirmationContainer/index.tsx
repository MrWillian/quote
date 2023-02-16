import { useFocus } from "../../hooks/useFocus";
import { CodeInput } from "./CodeInput";

export const ConfirmationContainer = () => {
    const [ inputRef ] = useFocus();

    return (
        <div className="my-8">
            <div className="flex items-center justify-between gap-4">
                <CodeInput inputRef={inputRef} />
                <CodeInput />
                <CodeInput />
                <CodeInput />
                <CodeInput />
                <CodeInput />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <p>Não recebeu o código?</p>
                <a href="#" className="underline">Reenviar</a>
            </div>
        </div>
    );
};
