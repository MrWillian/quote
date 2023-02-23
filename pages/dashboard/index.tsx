import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components';
import { useAuth } from "../../contexts/AuthContext";

import art from '../../public/static/images/WriteDownBalloonArtwrite-down-baloon.png';

const Home = () => {
    const [name, setName] = useState('');
    const { getUserAttributes } = useAuth();

    useEffect(() => {
        getUserAttributes().then((data: CognitoUserAttribute[]) => {
            const nameData = data.filter((element) => element.Name === 'given_name');
            setName(nameData[0].Value);
        }).catch(error => console.error(error)) 
    }, []);
    
    return (
        <DashboardLayout>
            <div className="flex flex-col p-8 w-screen">
                <div>
                    <h1 className="uppercase font-bold tracking-wide text-2xl">Hello, <span className="text-accent-color tracking-wider">{name}</span></h1>
                    <h2 className="text-accent-color font-bold text-lg">Veja todas as suas memórias...</h2>
                </div>

                <div className="flex">
                    <div className='w-3/4 md:w-2/4'>
                        <div className="flex items-center justify-center my-6 w-full">
                            <form method="GET" className="w-full">
                                <div className="relative text-gray-600 focus-within:text-gray-400">
                                    <input 
                                        className="py-2 px-6 w-full placeholder:text-white font-bold text-lg rounded shadow-2xl bg-accent-color focus:outline-none focus:bg-white focus:text-accent-color"
                                        type="text" 
                                        placeholder="Pesquisar..."
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                viewBox="0 0 24 24"
                                                className="w-6 h-6"
                                            >
                                                <path color="#FFFFFF" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-col justify-start h-3/4 bg-accent-color rounded divide-y divide-gray-500 shadow-md">
                            <div className="flex justify-between hover:border-b-[1px]">
                                <div className='flex justify-center flex-col p-2'>
                                    <h1>Chave de fenda</h1>
                                    <h3>Coloquei a chave de fenda no armário porque na caixa...</h3>
                                </div>
                                <div className='flex flex-col p-2'>
                                    <h3>18/02/2023</h3>
                                    <button className='bg-primary-color rounded shadow'>
                                        Editar
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between hover:border-b-[1px]">
                                <div className='flex justify-center flex-col p-2'>
                                    <h1>Chave da moto</h1>
                                    <h3>Coloquei a chave reserva da moto na gaveta do armário...</h3>
                                </div>
                                <div className='flex flex-col p-2'>
                                    <h3>01/02/2022</h3>
                                    <button className='bg-primary-color rounded shadow'>
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-1/4 py-6 px-4'>
                        <div className='flex justify-center relative'>
                            <Image 
                                className='absolute -top-10 w-3/4 md:-top-4 lg:-top-6 2xl:w-2/4 min-[2560px]:w-1/4'
                                src={art} 
                                alt="Write Down Ballon" 
                            />
                        </div>
                        <div className="flex flex-col justify-start bg-accent-color rounded shadow-md">
                            <form className="mx-4 my-10">
                                <div className="flex flex-col my-2">
                                    <label className="text-xl">Titúlo</label>
                                    <input type="text" className="text-xl text-black p-1 focus:outline-none" />
                                </div>
                                <div className="flex flex-col my-2">
                                    <label className="text-xl">Descrição</label>
                                    <textarea className="text-xl text-black p-1"></textarea>
                                </div>
                                <div className="flex flex-col my-2">
                                    <label className="text-xl">Data</label>
                                    <input type="date" className="text-xl p-1 text-black focus:outline-none" />
                                </div>

                                <div className="flex w-full justify-center items-center">
                                    <button 
                                        className="mt-6 z-90 bg-primary-color w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-violet-900 hover:drop-shadow-2xl hover:animate-bounce duration-300"
                                    >
                                        <span className="w-20">&#43;</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}

export default Home
