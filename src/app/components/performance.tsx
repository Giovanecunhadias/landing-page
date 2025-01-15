import { CircleCheck, CircleX } from "lucide-react";
import Image from 'next/image'


export default function Performance() {
    return(
        <div className="flex flex-col gap-4 justify-center items-center text-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
                <div style={{ backgroundColor: 'rgba(95, 194, 238, 0.5)'}} className="rounded-full w-30 text-center">
                    <span className="font-faktum text-[#5fc2ee] text-sm sm:text-base">PERFORMANCE</span>
                </div>
                <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Tecnologia para <span className="text-[#5fc2ee]">economizar o seu tempo</span>
                </h2>
                <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {/*DASHBOARD EM TEMPO REAL */}
                    <div className='text-left space-y-4'>

                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
                            <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>Dashboard</p>
                            <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>em tempo real.</p>
                            <Image src="/dashboard.png" alt="dashboard" width={200} height={200}/>
                        </div>
                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
                            <Image src="years.svg" width={200} height={200} alt="icon"/>
                            <p className="font-faktum font-bold text-[#1f073b]">Importe suas</p>
                            <p className="font-faktum font-bold text-[#1f073b]">vendas antigas.</p>
                            <Image src="spedy86.svg" width={200} height={200} alt="icon"/>
                        </div>
                    </div>

                    <div className='text-left space-y-4'>
                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
                            <p className='font-faktum text-xl sm:text-2xl text-[#1f073b]'>Fechamento</p>
                            <p className='font-faktum text-xl sm:text-2xl text-[#1f073b]'>mensal em dia.</p>
                            
                            <Image src="fechamento_mensal.svg"  width={100} height={100} alt="icon"/>
                            
                            
                            <p className='font-faktum text-lg sm:text-xl text-[#1f073b]'>Sem precisar enviar</p>
                            <p className='font-faktum text-lg sm:text-xl text-[#1f073b]'>o XML ao contador.</p>
                        </div>
                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
                            <Image src="suporte_operacao_dp.svg" alt="operação" width={100} height={100}/>
                            <p className='font-faktum text-lg sm:text-xl text-[#1f073b] mt-4'>Suporte total para</p>
                            <p className='font-faktum text-lg sm:text-xl text-[#1f073b]'>sua operação de</p>
                            <p className='font-faktum text-[#d93d8d] text-3xl sm:text-4xl'>Dropshipping</p>
                        </div>
                        
                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
                            <p className='font-faktum text-2xl sm:text-3xl text-[#d93d8d] flex items-center'><CircleCheck color='#ffff' fill='#01b169' size={24} className="mr-2"/>Cancelamento ou</p>
                            <p className='font-faktum text-2xl sm:text-3xl text-[#d93d8d] flex items-center'><CircleX fill='#d62e85' color='#ffff' size={24} className="mr-2"/>devolução autmático:</p>
                            <p className='font-faktum text-xl sm:text-2xl text-[#1f073b] flex items-center'><CircleCheck color='#ffff' fill='#01b169' size={24} className="mr-2"/>Quando uma venda é reembolsada o</p>
                            <p className='font-faktum text-xl sm:text-2xl text-[#1f073b] flex items-center'><CircleCheck color='#ffff' fill='#01b169' size={24} className="mr-2"/>Ameii Cancela!</p>
                        </div>
                        
                    </div>
                    <div className='text-left space-y-4'>
                        
                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center relative">
                            <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>Divisão entre </p>
                            <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>coprodutores.</p>
                            
                            <div className="relative w-[300px] h-[200px] my-4">
                                {/* SVG da divisão */}
                                <Image src="divisao.svg" alt="icon" width={100} height={100} className="mx-auto"/>
                                
                                {/* Foto do coprodutor 1 - esquerda */}
                                <div className="absolute left-20 bottom-0">
                                <img 
                                    src="https://framerusercontent.com/images/UUzCrpytoCj3VdSEkdlYSns86U.png" 
                                    alt="Coprodutor 1" 
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                                />
                                </div>
                                
                                {/* Foto do coprodutor 2 - direita */}
                                <div className="absolute right-20 bottom-0">
                                <img 
                                    src="https://framerusercontent.com/images/LCpfHb5KZMbMEqxj5CVnuj99EaA.png" 
                                    alt="Coprodutor 2" 
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                                />
                                </div>
                            </div>

                            
                        </div>
                        <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
                            <Image src="split.svg" alt="icon" width={100} height={100}/>
                            <p className='font-faktum text-2xl sm:text-3xl text-[#1f073b]'>Split fiscal de suas notas.</p>
                        </div>

                        
                    </div>
                </div>
                {/*FALTANDO IMAGENS */}
            </div>
    )
}