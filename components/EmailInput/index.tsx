type Props = {
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    inputRef: any
}

export const EmailInput = ({ value, onChange, inputRef }: Props) => (
    <div className='flex flex-col justify-center my-2'>
        <label className='text-sm font-bold' htmlFor="email">Email</label>
        <input 
            type="email" 
            name="email" 
            value={value}
            onChange={onChange}
            ref={inputRef} 
            className="rounded w-full px-2 py-1 shadow-lg text-black"
        />
    </div>
);
