type Props = {
    title: string,
    subtitle: string,
}

export const FormHeader = ({title, subtitle}: Props) => (
    <div className='py-4 mt-4'>
        <h1 className="text-6xl font-black">{title}</h1>
        <h2 className="text-2xl font-semibold mt-1">{subtitle}</h2>
    </div>
);
