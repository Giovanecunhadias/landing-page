import { ArrowRight } from 'lucide-react'
import YeverLines from '@/components/ui/yeverlines'
export default function Integrations() {
    return (
        <>
            <div style={{backgroundColor: '#1f073b'}} className="flex  flex-col gap-2 relative justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-10 ">
                <div style={{backgroundColor: 'rgba(217, 61, 141, 0.1)'}} className="rounded-full w-32 mb-4">
                    <p className="font-faktum text-center text-[#d93d8d] text-sm sm:text-base p-2">INTEGRAÇÕES</p>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-faktum">Encaixe Ameii na sua operação</h2>
                <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-2">Integre com mais de 40 plataformas do mercado.</p>
                
                <YeverLines/>
                <button className="bg-[#D93D8D] border border-[#D93D8D]
                rounded-2xl w-32 h-8 sm:w-36 sm:h-10 text-white font-faktum flex items-center justify-center gap-2 mt-4 text-sm sm:text-base transform transition-transform duration-300 hover:scale-90">
                    Ver todas
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>


              

               
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="w-[192px] h-[36px] absolute bottom-[-35px]"viewBox="0 0 192 36" preserveAspectRatio="none" width="192" height="36"><defs><svg width="192" height="36" fill="#1f073b" id="svg-865664889_417"><path d="M158.78 5.271c2.773-1.671 6.066-2.997 9.69-3.901C172.093.465 175.977 0 179.9 0H192 0h10.94c3.922 0 7.806.465 11.43 1.37 3.623.904 6.916 2.23 9.69 3.901L74.3 30.727c2.773 1.672 6.066 2.998 9.69 3.903 3.623.904 7.507 1.37 11.43 1.37 3.922 0 7.806-.466 11.43-1.37 3.624-.905 6.916-2.231 9.69-3.903l42.24-25.456Z" fill="#1F073B"></path></svg></defs><g><path d="M158.78 5.271c2.773-1.671 6.066-2.997 9.69-3.901C172.093.465 175.977 0 179.9 0H192 0h10.94c3.922 0 7.806.465 11.43 1.37 3.623.904 6.916 2.23 9.69 3.901L74.3 30.727c2.773 1.672 6.066 2.998 9.69 3.903 3.623.904 7.507 1.37 11.43 1.37 3.922 0 7.806-.466 11.43-1.37 3.624-.905 6.916-2.231 9.69-3.903l42.24-25.456Z" fill="#1F073B"></path></g></svg>
              
            </div>
       
            

            
        </>
    )
}