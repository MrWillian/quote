import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../interfaces/types";

type CodeConfirmationContextType = {
    code: string[];
    getCode: () => string;
    handleCode: (name: string, value: string) => void;
    clearCode: () => void;
};

const codeConfirmationContextDefaultValues: CodeConfirmationContextType = {
    code: null,
    getCode: () => null,
    handleCode: () => null,
    clearCode: () => null,
}

const CodeConfirmationContext = createContext<CodeConfirmationContextType>(codeConfirmationContextDefaultValues);

export const useCodeConfirmation = () => useContext(CodeConfirmationContext);

export const CodeConfirmationProvider = ({ children }: ChildrenProps) => {
    const [ code, setCode ] = useState<string[]>([]);

    const handleCode = (name: string, value: string) => {
        setCode(prev => ({
            ...prev, [name]: value
        }));
    }

    const getCode = () => objToString(code);

    const clearCode = () => setCode([]);

    function objToString(obj) {
        let aux = '';
        return Object.entries(obj).reduce((str, [p, val]) => {
            aux += val;
            return `${aux}`;
        }, '');
    }

    const value = { code, getCode, handleCode, clearCode };
    
    return (
        <CodeConfirmationContext.Provider value={value}>
            {children}
        </CodeConfirmationContext.Provider>
    );
}
