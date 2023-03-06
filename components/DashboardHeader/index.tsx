import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export const DashboardHeader = () => {
    const [name, setName] = useState('');
    const { getName } = useAuth();

    useEffect(() => {
        handleName();
    }, []);

    const handleName = async () => {
        const name = await getName();
        setName(name);
    }

    return (
        <div>
            <h1 className="uppercase font-bold tracking-wide text-2xl">
                Hello, <span className="text-accent-color tracking-wider">{name}</span>
            </h1>
            <h2 className="text-accent-color font-bold text-lg">Veja todas as suas memórias...</h2>
        </div>
    )
}
