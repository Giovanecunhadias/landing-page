import { ArrowRight } from 'lucide-react'
import LinesFoots from './lines-foots'
export default function Integrations() {
    return (
        <>
            <div style={{backgroundColor: '#1f073b'}} className="flex flex-col gap-2 justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-10 mt-10 sm:mt-20">
                <div style={{backgroundColor: 'rgba(217, 61, 141, 0.5)'}} className="rounded-full w-28 mb-4">
                    <p className="font-faktum text-center text-[#d93d8d] text-sm sm:text-base">INTEGRAÇÕES</p>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-faktum">Encaixe Ameii na sua operação</h2>
                <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-2">Integre com mais de 40 plataformas do mercado.</p>
                <LinesFoots/>
                <button className="bg-[#D93D8D] border rounded-2xl w-32 h-8 sm:w-36 sm:h-10 text-white font-faktum flex items-center justify-center gap-2 mt-4 text-sm sm:text-base">
                    Ver todas
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
            </div>
        </>
    )
}