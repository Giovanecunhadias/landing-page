import React from "react";
import Image from 'next/image'
const RotatingTextLogo = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Imagem ou Ícone Central */}
      <div className="absolute z-10">
        <Image
        src={'/favicon.ico'}
        width={50}
        height={50}
        alt="icon"
        />
      </div>

      {/* Texto Rotacionando */}
      <div className="absolute w-full h-full">
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circlePath"
            fill="none"
            d="M50,10a40,40 0 1,1 0,80a40,40 0 1,1 0,-80"
          />
          <text fontSize="16" fill="#ffff" textAnchor="middle">
            <textPath href="#circlePath" className="text-white" startOffset="0">
              Comece agora • Comece agora • Comece agora • Comece agora • Comece agora
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RotatingTextLogo;
