import RotatingTextIcon from "./logo-com-texto-rodando"; 
export default function Proposal() {
    return (
        <>
            <div className="bg-[#1f073b] relative flex flex-col justify-center items-center text-center p-6 md:p-12">
                <div className="flex flex-col items-center">
                    <RotatingTextIcon/>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl text-white font-faktum leading-snug md:leading-tight">
                        E aí, que tal simplificar processos fiscais da sua empresa?
                    </h2>
                    
                </div>

                <div className="flex flex-col md:flex-row items-center text-center justify-center gap-4 mt-6">
                    <button className="bg-[#d93d8d] px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-faktum text-sm md:text-base">
                        Começar agora
                    </button>
                    <button className="border-[#ffff] border-solid border-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-faktum text-sm md:text-base">
                        Fale Conosco
                    </button>
                </div>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="w-[192px] h-[36px] absolute bottom-[-35px]"viewBox="0 0 192 36" preserveAspectRatio="none" width="192" height="36"><defs><svg width="192" height="36" fill="#1f073b" id="svg-865664889_417"><path d="M158.78 5.271c2.773-1.671 6.066-2.997 9.69-3.901C172.093.465 175.977 0 179.9 0H192 0h10.94c3.922 0 7.806.465 11.43 1.37 3.623.904 6.916 2.23 9.69 3.901L74.3 30.727c2.773 1.672 6.066 2.998 9.69 3.903 3.623.904 7.507 1.37 11.43 1.37 3.922 0 7.806-.466 11.43-1.37 3.624-.905 6.916-2.231 9.69-3.903l42.24-25.456Z" fill="#1F073B"></path></svg></defs><g><path d="M158.78 5.271c2.773-1.671 6.066-2.997 9.69-3.901C172.093.465 175.977 0 179.9 0H192 0h10.94c3.922 0 7.806.465 11.43 1.37 3.623.904 6.916 2.23 9.69 3.901L74.3 30.727c2.773 1.672 6.066 2.998 9.69 3.903 3.623.904 7.507 1.37 11.43 1.37 3.922 0 7.806-.466 11.43-1.37 3.624-.905 6.916-2.231 9.69-3.903l42.24-25.456Z" fill="#1F073B"></path></g></svg>

            </div>
        </>
    );
}
