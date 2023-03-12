import Image from "next/image";
import { useAuth } from "../../../contexts/AuthContext";
import { registerQuote } from "../../../lib/registerQuote";
import { sanitizeQuoteDataToSave } from "../../../utils/sanitizeQuoteDataToSave";
import { useQuoteRegisterForm } from "../../../hooks/useQuoteRegisterForm";
import art from '../../../public/static/images/WriteDownBalloonArtwrite-down-baloon.png';
import { SpinnerIcon } from "../../Icons";

export const QuoteRegisterContainer = () => {
    const { getSub } = useAuth();
    const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useQuoteRegisterForm();

    const onSubmit = async (fields: any) => {
        const sub = await getSub();
        const data = await sanitizeQuoteDataToSave(fields, sub);
        const response = await registerQuote(data).then(response => response);
        if (response.status === '200') {
            reset();
            alert('Sucesso...');
        }
        if (response.errorMessage) alert('Ocorreu um erro ao tentar salvar...');
    }

    return (
        <div className='flex flex-col w-1/4 py-6 px-4'>
            <div className='flex justify-center relative'>
                <Image 
                    className='absolute -top-10 w-3/4 md:-top-4 lg:-top-6 2xl:w-2/4 min-[2560px]:w-1/4'
                    src={art} 
                    alt="Write Down Ballon" 
                />
            </div>
            <div className="flex flex-col justify-start bg-accent-color rounded shadow-md">
                <form className="mx-4 my-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col my-2">
                        <label className="text-xl">Titúlo</label>
                        <input 
                            type="text" 
                            className={`text-xl text-black p-1 focus:outline-none ${errors.title && 'border-2 border-red-500'}`}
                            placeholder="Defina um titúlo..."
                            {...register('title')}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-xl">Descrição</label>
                        <textarea 
                            placeholder="Defina uma descrição..."
                            className={`text-xl text-black p-1 ${errors.description && 'border-2 border-red-500'}`}
                            {...register('description')}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-xl">Data</label>
                        <input 
                            type="date" 
                            className="text-xl p-1 text-black focus:outline-none" 
                            {...register('date')}
                        />
                    </div>

                    <div className="flex w-full justify-center items-center">
                        <button 
                            type="submit"
                            className="mt-6 z-90 bg-primary-color w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce"
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
