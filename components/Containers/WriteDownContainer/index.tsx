import Image from "next/image";

import art from '../../../public/static/images/artwrite_down_quote_app.png';

type Props = {
    className?: string,
    width?: number,
    height?: number,
}

export const WriteDownContainer = ({ className, width, height }: Props) => (
    <section className={`flex justify-center items-center w-1/2 p-4 ${className}`}>
        <Image 
            src={art} 
            alt="Write Down" 
            height={height ? height : null}
            width={width ? width : null}
        />
    </section>
);
