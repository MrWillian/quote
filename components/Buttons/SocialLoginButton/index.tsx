import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IconContext } from "react-icons";

export function SocialLoginButton() {
  return (
    <button className="flex justify-center items-center w-full py-2 bg-white rounded shadow-lg">
        <span className="text-xl tracking-widest font-semibold text-accent-color">Entre com o Google</span>
        <IconContext.Provider value={{ size: '2em'}}>
          <FcGoogle className="mx-4" />
        </IconContext.Provider>
    </button>
  );
}
