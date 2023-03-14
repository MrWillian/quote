import Image from "next/image";

import art from '../../../public/static/images/artwrite_down_quote_app.png';

export const WriteDownContainer = ({ className }) => (
    <section className={`flex justify-center items-center h-full w-1/2 p-4 ${className}`}>
        <Image 
            src={art} 
            alt="Write Down" 
        />
    </section>
);
