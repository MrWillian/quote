import Image from "next/image";
import { useAuth } from "../../../contexts/AuthContext";
import { registerQuote } from "../../../lib/registerQuote";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';
import art from '../../../public/static/images/WriteDownBalloonArtwrite-down-baloon.png';
import { sanitizeQuoteDataToSave } from "../../../utils/sanitizeQuoteDataToSave";

let schema = object().shape({
    title: string().required().min(2),
    description: string().required().min(2),
    date: date().required(),
});

export const QuoteRegisterContainer = () => {
    const { getSub } = useAuth();
    const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm({ 
        mode: 'all', 
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            description: '',
            date: new Date().toISOString().substr(0, 10)
        }
    });

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
                            {!isSubmitting ? 
                                    <span className="w-20">&#43;</span>
                                :
                                    <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4335 4335" width="100" height="100">
                                        <path 
                                            fill="#5C5091" 
                                            d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
                                        />
                                    </svg>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
