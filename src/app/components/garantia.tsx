import { MoveRight } from "lucide-react"

export default function Garantia() {    
    return (
        <>
        <div style={{backgroundColor: '#1F073B'}} className="px-4 sm:px-6 lg:px-8 py-12 mt-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <div className="hidden sm:block">
                        <div className="relative w-32 h-32 bg-[#FFBC00] rounded-full flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-4xl font-bold font-faktum">30</span>
                                <br />
                                <span className="text-xl font-faktum">dias</span>
                            </div>
                            {/* Sparkle effect */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white transform rotate-45"></div>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-faktum text-[#FFBC00] mb-4">
                            Garanta sua satisfação com risco zero
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-faktum text-white mb-4">
                            Se o Spedy não superar suas expectativas em até 30 dias, prometemos reembolso total, sem burocracia. Sua confiança, nossa prioridade.
                        </p>
                        <button className="bg-[#FFBC00] font-faktum px-6 py-3 rounded-full flex items-center justify-center gap-2 text-[#1F073B] text-sm sm:text-base hover:bg-[#ffc835] transition-colors">
                            Quero começar
                            <MoveRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}