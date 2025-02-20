import { MoveRight } from "lucide-react";

export default function Garantia() {
  return (
    <>
      <div
        style={{ backgroundColor: "#1F073B" }}
        className="px-4 relative flex flex-col jusitfy-center items-center sm:px-6 lg:px-8 py-12 pt-44 mt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="hidden  lg:block">
              <img
                width={300}
                className="hover:animate-pulseScale "
                src="/garantia.svg"
                alt="Garantia"
              />
            </div>

            <div className="flex-1 justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-faktum text-[#FFBC00] mb-4">
                Garanta sua satisfação com risco zero
              </h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-faktum text-white mb-4">
                Se A Ameii não superar suas expectativas em até 30 dias,
                prometemos reembolso total, sem burocracia. Sua confiança, nossa
                prioridade.
              </p>
              <button className="bg-[#FFBC00] font-faktum px-6 py-3 rounded-full flex items-center justify-center gap-2 text-[#1F073B] text-sm sm:text-base hover:bg-[#ffc835] transition-colors hoveranimate-pulseScale animate-once">
                Quero começar
                <MoveRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[192px] h-[36px]  absolute bottom-[-35px]"
          viewBox="0 0 192 36"
          preserveAspectRatio="none"
          width="192"
          height="36"
        >
          <defs>
            <svg width="192" height="36" fill="#1f073b" id="svg-865664889_417">
              <path
                d="M158.78 5.271c2.773-1.671 6.066-2.997 9.69-3.901C172.093.465 175.977 0 179.9 0H192 0h10.94c3.922 0 7.806.465 11.43 1.37 3.623.904 6.916 2.23 9.69 3.901L74.3 30.727c2.773 1.672 6.066 2.998 9.69 3.903 3.623.904 7.507 1.37 11.43 1.37 3.922 0 7.806-.466 11.43-1.37 3.624-.905 6.916-2.231 9.69-3.903l42.24-25.456Z"
                fill="#1F073B"
              ></path>
            </svg>
          </defs>
          <g>
            <path
              d="M158.78 5.271c2.773-1.671 6.066-2.997 9.69-3.901C172.093.465 175.977 0 179.9 0H192 0h10.94c3.922 0 7.806.465 11.43 1.37 3.623.904 6.916 2.23 9.69 3.901L74.3 30.727c2.773 1.672 6.066 2.998 9.69 3.903 3.623.904 7.507 1.37 11.43 1.37 3.922 0 7.806-.466 11.43-1.37 3.624-.905 6.916-2.231 9.69-3.903l42.24-25.456Z"
              fill="#1F073B"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
}
