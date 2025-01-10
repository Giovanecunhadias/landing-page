import React from 'react';
import phone from '../assets/image/phone.png';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const Mockup = () => {
  return (
    <div className="relative flex justify-center items-center h-screen ">
      {/* Imagem do telefone como contêiner principal */}
      <div className="relative">
        {/* Imagem do telefone */}
        <Image 
          src={phone} 
          alt="phone" 
          className="block w-auto h-[700px]" 
        />
        
        {/* Notificações e SVGs */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          {/* Notificação 1 */}
          <div className="flex items-center bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex-shrink-0">
              <Mail className="text-gray-800" />
            </div>
            <div className="ml-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-gray-900">Olá Ricardo</p>
                <p className="text-xs text-gray-500">1m atrás</p>
              </div>
              <p className="text-sm text-gray-800 mt-1">Sua nota fiscal está pronta!</p>
            </div>
          </div>

          {/* Notificação 2 com SVGs */}
          <div className="relative flex flex-col items-center">
            <div className="flex items-center bg-white rounded-lg shadow-lg p-4 max-w-sm z-10">
              <div className="flex-shrink-0">
                <Mail className="text-gray-800" />
              </div>
              <div className="ml-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-900">Olá Juliana</p>
                  <p className="text-xs text-gray-500">2m atrás</p>
                </div>
                <p className="text-sm text-gray-800 mt-1">Sua nota fiscal está pronta!</p>
              </div>
            </div>

            {/* SVGs conectados */}
            <div className=" ">
      <div className="flex flex-col items-start">
        {/* SVG 1 */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-auto  fill-transparent"
            viewBox="0 0 199 92"
            

          >
            <path                
              d="M 197.5 2 L 161.5 2 C 154.873 2 149.5 7.373 149.5 14 L 149.5 78 C 149.5 84.627 144.127 90 137.5 90 L 2 90"
              stroke="rgb(149, 191, 71)"
              strokeWidth={2}
              strokeDasharray="300"
              className='animate-draw'
            ></path>
          </svg>
        </div>

        {/* SVG 2 */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-auto"
            viewBox="0 0 204 3"
            strokeDasharray={300}
          >
            <path
              d="M 202.501 1 L 1.53 1"
              stroke="rgb(40, 47, 227)"
              strokeWidth="2"
              strokeDasharray="300"
              fill="transparent"
              className='animate-draw'
              
              
            ></path>
          </svg>
        </div>

        {/* SVG 3 */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-auto"
            viewBox="0 0 199 92"
          >
            <path
              d="M 197.5 90 L 161.5 90 C 154.873 90 149.5 84.627 149.5 78 L 149.5 14 C 149.5 7.373 144.127 2 137.5 2 L 2 2"
              stroke="rgb(217, 61, 141)"
              strokeWidth="2.01"
              strokeDasharray="300"
              fill="transparent"
              className='animate-draw'
            ></path>
          </svg>
        </div>
      </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Mockup;
