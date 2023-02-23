import Image from "next/image";

import icon from '../../public/static/QuoteApp.png';

export const QuoteAppIcon = () => (
    <div className='flex w-full justify-center items-center'>
        <Image 
            className='flex items-center'
            src={icon} 
            alt="Quote App Icon" 
            width={60} 
            height={60} 
        />
    </div>
);
