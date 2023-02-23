import Image from "next/image";

import art from '../../../public/static/images/artwrite_down_quote_app.png';

export const WriteDownContainer = () => (
    <section className="flex h-full w-1/2 justify-center items-center p-4">
        <Image 
            src={art} 
            alt="Write Down" 
        />
    </section>
);
