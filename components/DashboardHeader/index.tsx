import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";

export const DashboardHeader = () => {
    const [name, setName] = useState('');
    const { getUserAttributeByName } = useAuth();
    const { t } = useTranslation();

    useEffect(() => {
        handleName();
    }, []);

    const handleName = async () => {
        const name = await getUserAttributeByName('given_name');
        setName(name);
    }

    return (
        <div>
            <h1 className="uppercase font-bold tracking-wide text-2xl">
                {t('dashboard.hello')}<span className="text-accent-color tracking-wider">{name}</span>
            </h1>
            <h2 className="text-accent-color font-bold text-lg">{t('dashboard.memories')}</h2>
        </div>
    )
}
