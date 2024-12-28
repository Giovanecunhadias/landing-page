import { CircleCheck, CircleX } from "lucide-react";

export default function Performance() {
    return(
        <div className="flex flex-col gap-4 justify-center items-center text-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
                <div style={{ backgroundColor: 'rgba(95, 194, 238, 0.5)'}} className="rounded-full w-28 text-center">
                    <span className="font-faktum text-[#5fc2ee] text-sm sm:text-base">PERFORMANCE</span>
                </div>
                <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Tecnologia para <span className="text-[#5fc2ee]">economizar o seu tempo</span>
                </h2>
                <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {/*DASHBOARD EM TEMPO REAL */}
                    <div className='text-left'>
                        <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>Dashboard</p>
                        <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>em tempo real.</p>
                    </div>

                    <div className='text-left'>
                        <p className='font-faktum text-xl sm:text-2xl text-[#1f073b]'>Fechamento</p>
                        <p className='font-faktum text-xl sm:text-2xl text-[#1f073b]'>mensal em dia.</p>
                        <p className='font-faktum text-lg sm:text-xl text-[#1f073b]'>Sem precisar enviar</p>
                        <p className='font-faktum text-lg sm:text-xl text-[#1f073b]'>o XML ao contador.</p>
                        
                        <p className='font-faktum text-lg sm:text-xl text-[#1f073b] mt-4'>Suporte total para</p>
                        <p className='font-faktum text-lg sm:text-xl text-[#1f073b]'>sua operação de</p>
                        <p className='font-faktum text-[#d93d8d] text-3xl sm:text-4xl'>Dropshipping</p>
                        <p className='font-faktum text-2xl sm:text-3xl text-[#d93d8d] flex items-center'><CircleCheck color='#ffff' fill='#01b169' size={24} className="mr-2"/>Cancelamento ou</p>
                        <p className='font-faktum text-2xl sm:text-3xl text-[#d93d8d] flex items-center'><CircleX fill='#d62e85' color='#ffff' size={24} className="mr-2"/>devolução autmático:</p>
                        <p className='font-faktum text-xl sm:text-2xl text-[#1f073b] flex items-center'><CircleCheck color='#ffff' fill='#01b169' size={24} className="mr-2"/>Quando uma venda é reembolsada o</p>
                        <p className='font-faktum text-xl sm:text-2xl text-[#1f073b] flex items-center'><CircleCheck color='#ffff' fill='#01b169' size={24} className="mr-2"/>Ameii Cancela!</p>
                    </div>
                    <div className='text-left'>
                        <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>Divisão entre coprodutores.</p>
                        <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>Split de suas notas.</p>
                    </div>
                </div>
                {/*FALTANDO IMAGENS */}
            </div>
    )
}