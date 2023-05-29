import Image from "next/image";
import { registerQuote } from "../../../lib/registerQuote";
import { sanitizeQuoteDataToSave } from "../../../utils/sanitizeQuoteDataToSave";
import { useQuoteRegisterForm } from "../../../hooks/useQuoteRegisterForm";
import { SpinnerIcon } from "../../Icons";
import { useTranslation } from "react-i18next";
import useAuthenticatedUser from "../../../hooks/useAuthenticatedUser";
import art from '../../../public/static/images/WriteDownBalloonArtwrite-down-baloon.png';

export const QuoteRegisterContainer = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useQuoteRegisterForm();
    const { t } = useTranslation();
    const [_, getUserId] = useAuthenticatedUser();

    const onSubmit = async (fields: any) => {
        const username = await getUserId().then(result => result);
        const data = await sanitizeQuoteDataToSave(fields, username);
        const response = await registerQuote(data).then(response => response);
        if (response.status === '200') {
            reset();
            alert(t('common.success'));
        }
        if (response.errorMessage) alert(t('common.error_on_save'));
    }

    return (
        <div className='flex flex-col w-1/4 px-4 py-6'>
            <div className='relative flex justify-center'>
                <Image 
                    className='absolute -top-10 w-3/4 md:-top-4 lg:-top-6 2xl:w-2/4 min-[2560px]:w-1/4'
                    src={art} 
                    alt="Write Down Ballon" 
                />
            </div>
            <div className="flex flex-col justify-start rounded shadow-md bg-accent-color">
                <form className="mx-4 my-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col my-2">
                        <label className="text-xl">{t('common.title')}</label>
                        <input 
                            type="text" 
                            className={`text-sm text-black p-1 focus:outline-none ${errors.title && 'border-2 border-red-500'}`}
                            placeholder={t('common.define_title')}
                            {...register('title')}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-xl">{t('common.description')}</label>
                        <textarea 
                            placeholder={t('common.define_description')}
                            rows={4}
                            className={`text-sm text-black p-1 ${errors.description && 'border-2 border-red-500'}`}
                            {...register('description')}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-xl">{t('common.date')}</label>
                        <input 
                            type="date" 
                            className="p-1 text-xl text-black focus:outline-none" 
                            {...register('date')}
                        />
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <button 
                            type="submit"
                            className="flex items-center justify-center w-20 h-20 mt-6 text-4xl text-white rounded-full z-90 bg-primary-color drop-shadow-lg hover:drop-shadow-2xl hover:animate-bounce"
                            disabled={isSubmitting}
                        >
                            {!isSubmitting ? <span className="w-20">&#43;</span> : <SpinnerIcon color="#5C5091" />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
