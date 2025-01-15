import React from 'react';
import phone from '../assets/image/phone.png';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const Mockup = () => {
  return (
    <div className="relative flex justify-center items-center h-screen ">
      {/* Imagem do telefone como contêiner principal */}
      <div className="relative">
        <div>
        <div className="absolute -right-[12.1875rem] top-2/4 -translate-y-2/4">
            <svg
              width="199"
              height="178"
              viewBox="0 0 199 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-animation"
            >
              {/* Barra 1 */}
              <path
                d="M3 1H39C45.627 1 51 6.373 51 13V77C51 83.627 56.373 89 63 89H198.5"
                stroke="#EF4E23"
                strokeWidth="2.01"
                className="line-1"
              />
              {/* Barra 2 */}
              <path
                d="M0 89H199"
                stroke="#01B169"
                strokeWidth="2.02"
                className="line-2"
              />
              {/* Barra 3 */}
              <path
                d="M3 177H39C45.627 177 51 171.627 51 165V101C51 94.373 56.373 89 63 89H198.5"
                stroke="#FFBC00"
                strokeWidth="2.01"
                className="line-3"
              />
            </svg>

            <div className="absolute top-0 left-0">
              {/* Bolinha 1 */}
              <div
                className="w-3 h-3 bg-[#EF4E23] rounded-full absolute animate-bolinha1 opacity-70 shadow-bolinha"
                style={{ top: "-5px", left: "3px" }}
              ></div>

              {/* Bolinha 2 */}
              <div
                className="w-3 h-3 bg-[#01B169] rounded-full absolute animate-bolinha2 opacity-70 shadow-bolinha-green"
                style={{ top: "84px", left: "3px" }}
              ></div>

              {/* Bolinha 3 */}
              <div
                className="w-3 h-3 bg-[#FFBC00] rounded-full absolute animate-bolinha3 opacity-70 shadow-bolinha-yellow"
                style={{ top: "170px", left: "3px" }}
              ></div>
            </div>
          </div>
          <div className="bg-red-500 w-[200px] h-[200px] relative ">
            <Image 
              src={phone} 
              alt="phone" 
              className="absolute w-full h-full" 
            />
          </div>
          
          <div className="absolute -left-[12.0625rem] top-2/4 -translate-y-2/4">
            <svg
              width="201"
              height="178"
              viewBox="0 0 201 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-animation"
            >
              {/* Linha 1 */}
              <path
                d="M195.5 1H159.5C152.873 1 147.5 6.373 147.5 13V77C147.5 83.627 142.127 89 135.5 89H0"
                stroke="#95BF47"
                strokeWidth="2.01"
                className="line-1"
              />
              {/* Linha 2 */}
              <path
                d="M200.971 89H0"
                stroke="#282FE3"
                strokeWidth="2"
                className="line-2"
              />
              {/* Linha 3 */}
              <path
                d="M195.5 177H159.5C152.873 177 147.5 171.627 147.5 165V101C147.5 94.373 142.127 89 135.5 89H0"
                stroke="#D93D8D"
                strokeWidth="2.01"
                className="line-3"
              />
            </svg>

            <div className="absolute inset-0">
              {/* Bolinha 1 */}
              <div
                className="w-3 h-3 bg-[#95BF47] rounded-full absolute animate-bolinha-right-1 opacity-70 shadow-bolinha-green2"
                style={{ top: "-5px", right: "5px" }}
              ></div>

              {/* Bolinha 2 */}
              <div
                className="w-3 h-3 bg-[#282FE3] rounded-full absolute animate-bolinha-right-2 opacity-70 shadow-bolinha-blue"
                style={{ top: "84px", right: "5px" }}
              ></div>

              {/* Bolinha 3 */}
              <div
                className="w-3 h-3 bg-[#D93D8D] rounded-full absolute animate-bolinha-right-3 opacity-70 shadow-bolinha-pink"
                style={{ top: "170px", right: "5px" }}
              ></div>
            </div>
          </div>
        </div>
        {/* Imagem do telefone */}
        
        
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
