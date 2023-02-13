type Props = {
    inputRef: any
}

export const EmailInput = ({ inputRef }: Props) => (
    <div className='flex flex-col justify-center my-2'>
        <label className='text-sm font-bold' htmlFor="email">Email</label>
        <input type="email" name="email" ref={inputRef} className="rounded w-full px-2 py-1 shadow-lg text-black" />
    </div>
);
