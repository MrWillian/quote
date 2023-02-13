export const PasswordInput = () => (
    <div className='flex flex-col justify-center my-2'>
        <label className='text-sm font-bold' htmlFor="password">Senha</label>
        <input type="password" name="password" className="rounded w-full px-2 py-1 shadow-lg text-black" />
    </div>
);
