import { useFocus } from "../../hooks/useFocus";
import { InputProps } from "../../interfaces/types";

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


const CodeInput = ({ inputRef }: InputProps) => (
    <input 
        type="text"
        className="text-center h-16 w-1/6 text-5xl font-black text-accent-color rounded-md shadow-md"
        maxLength={1}
        ref={inputRef}
    />
);
