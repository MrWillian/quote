import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layouts/Layout';

const FAQPage = () => (
    <Layout title="Contato | Quote App">
        <div className="flex flex-col justify-around items-center pt-10">
            <h2 className="tracking-wider uppercase">What do you want to know?</h2>
            <h1 className="text-2xl font-black tracking-widest leading-normal drop-shadow-lg shadow-black">Some of the most frequently asked questions</h1>
            <div className='flex flex-col p-4 bg-white text-black rounded-lg shadow-md shadow-black mt-10 gap-4 divide-y'>
                <div className='flex items-center bg-primary-color rounded-lg shadow-md shadow-black py-2' />
                <div className='flex gap-5 items-center'>
                    <span className='text-xl font-black'>01</span>
                    <div>
                        <p className='text-xl font-bold'>É um serviço gratuito?</p>
                        <p>Sim, o Quote App é um serviço onde não lhe será cobrado nenhum valor!</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <span className='text-xl font-black'>02</span>
                    <div>
                        <p className='text-xl font-bold'>Há algum aplicativo?</p>
                        <p>Sim, temos aplicativo disponível na PlayStore, e você poderá acessa-lo com a mesma conta que acessa pelo seu browser.</p>
                    </div>
                </div>
                <div className='flex items-center bg-primary-color rounded-lg shadow-md shadow-black py-2' />
            </div>
        </div>
    </Layout>
)

export default FAQPage;
