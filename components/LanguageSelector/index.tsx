import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (event) => i18n.changeLanguage(event.target.value);

    return (
        <div>
            <select 
                id="countries" 
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="en" selected={i18n.language == 'en'}>{t('common.english')}</option>
                <option value="pt" selected={i18n.language == 'pt'}>{t('common.portuguese')}</option>
            </select>
        </div>
    );
}
