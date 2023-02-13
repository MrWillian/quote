import { useEffect, useRef } from "react"

export const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() };

    useEffect(() => {
        htmlElRef.current.focus();
    }, []);

    return [ htmlElRef, setFocus ];
}
