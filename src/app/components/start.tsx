"use client"
import { ArrowRight, MoveRight } from 'lucide-react'
import Image from "next/image"
import phone from '@/app/assets/image/phone.png'
import AnimatedGrid from "./animations/line-animatiion"
import Plans from "./plans"
import InfinityList from "./infinity_list"
import Nav from './responsive_navbar'
import Faq from './faq'
import { Rating } from 'primereact/rating'
import firstprofile from '@/app/assets/profiles/first_profile.png'
import secondprofile from '@/app/assets/profiles/second_profile.png'
import thirdprofile from '@/app/assets/profiles/third_profile.png'
import Performance from './performance'

export default function Start() {
    const arrowColor = '#D93D8D'

    return (
        <>
            <Nav />
            
            <div style={{backgroundColor: '#1F073B'}} className="pt-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-faktum animate-delay-0 animate-duration-10000 animate-fade-down">
                        Foque <span className="text-[#d93d8d]">em vender</span> e deixe as<br className="hidden sm:inline" />
                        notas fiscais com <span className="text-[#d93d8d]">o Spedy.</span>
                    </h1>
                    
                    <p className="flex items-center text-white font-arial mt-4 text-sm sm:text-base lg:text-lg">
                        Integre <MoveRight color={arrowColor} className="mx-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> Venda <MoveRight color={arrowColor} className="mx-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> 
                        <span className="text-[#d93d8d]">O resto é com o Spedy</span>
                    </p>
                </div>
                
                <div className="flex justify-center mt-8">
                    <Image 
                        src={phone}
                        alt="Spedy app on phone"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                    />
                </div>
            </div>

            {/* INTEGRE */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
                <div className="md:col-start-5 md:col-span-2 animate-jump-in">
                    <div style={{backgroundColor: 'rgba(1, 177, 105, 0.5)'}} className="rounded-full w-24 text-center mb-4">
                        <span className="font-faktum text-[#02b16a] text-sm sm:text-base">INTEGRE</span>
                    </div>
                    <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Conecte <span className="text-[#01B169]">sua</span><br />
                        <span className="text-[#01B169]">plataforma</span><br />
                        de pagamento.
                    </h2>
                    <p className="font-faktum text-sm sm:text-md lg:text-lg mt-2">+ de 30 integrações disponíveis.</p>
                </div>
            </div>

            {/* CONFIGURE */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
                <div className="md:col-start-5 md:col-span-2 animate-jump-in">
                    <div style={{ backgroundColor: 'rgba(217, 61, 141, 0.5)' }} className="rounded-full w-28 text-center mb-4">
                        <span className="font-faktum text-[#d93d8d] text-sm sm:text-base">CONFIGURE</span>
                    </div>
                    <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        O Spedy entrega<br />
                        as <span className="text-[#d93d8d]">suas vendas</span><br />
                        e emite as notas.
                    </h2>
                    <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                        Você escolhe: na cobrança, após o<br className="hidden sm:inline" />
                        pagamento ou após a garantia.
                    </p>
                </div>
            </div>

            {/* AUTOMATIZE */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
                <div className="md:col-start-5 md:col-span-2 animate-jump-in">
                    <div style={{ backgroundColor: 'rgba(95, 194, 238, 0.5)'}} className="rounded-full w-28 text-center mb-4">
                        <span className="font-faktum text-[#5fc2ee] text-sm sm:text-base">AUTOMATIZE</span>
                    </div>
                    <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Enviamos a nota<br />
                        fiscal para <span className="text-[#5fc2ee]">seu</span><br />
                        <span className="text-[#5fc2ee]">cliente</span> na hora!
                    </h2>
                    <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                        Automaticamente e poupando seu<br className="hidden sm:inline" />
                        valioso tempo!
                    </p>
                </div>
            </div>
            <InfinityList/>
            <AnimatedGrid/>
            {/* INTEGRAÇÕES */}
            <div style={{backgroundColor: '#1f073b'}} className="flex flex-col gap-2 justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-10 mt-10 sm:mt-20">
                <div style={{backgroundColor: 'rgba(217, 61, 141, 0.5)'}} className="rounded-full w-28 mb-4">
                    <p className="font-faktum text-center text-[#d93d8d] text-sm sm:text-base">Integrações</p>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-faktum">Encaixe o Spedy na sua operação</h2>
                <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-2">Integre com mais de 40 plataformas do mercado.</p>
                
                <button className="bg-[#D93D8D] border rounded-2xl w-32 h-8 sm:w-36 sm:h-10 text-white font-faktum flex items-center justify-center gap-2 mt-4 text-sm sm:text-base">
                    Ver todas
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>

            {/* PERFORMANCE */}
            <Performance/>
            
            {/* DEPOIMENTOS */}
            <div className="flex flex-col gap-2 justify-center items-center text-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
    <div style={{backgroundColor: 'rgba(217, 61, 141, 0.5)'}} className="rounded-full w-auto text-center px-4 py-1">
        <span className="font-faktum text-[#d93d8d] text-sm sm:text-base">DEPOIMENTOS</span>
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-faktum mt-2 mb-8">+ de 6 milhões de notas emitidas</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        <div className="bg-white rounded-xl p-6 shadow-lg">
            <Rating value={5} className="space-x-2 mb-4" cancel={false} style={{ color: '#ffbc00' }}/>
            <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg mb-4">
                Ameii foi a escolha certa. Atendimento impecável, consultor educado, nos ajudou a configurar e tirar dúvidas. Plataforma de fácil usabilidade e preço super justo. Super recomendo, tem agilizado muito nosso trabalho.
            </p>
            <div className="flex items-center space-x-4">
                <Image src={firstprofile} alt="profile image" width={50} height={50} className="rounded-full"/>
                <div>
                    <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg font-bold">Leonardo Fittipaldi</p>
                    <p className="text-[#1f073b] font-faktum text-xs sm:text-sm">Infoprodutor</p>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
            <Rating value={5} className="space-x-2 mb-4" cancel={false} style={{ color: '#ffbc00' }}/>
            <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg mb-4">
                Spedy simplificou minha vida, não preciso emitir notas manualmente. Integração e split automáticos, cálculos corretos de coprodução. Suporte atende prontamente. Feliz com Spedy, tirei um peso das costas.
            </p>
            <div className="flex items-center space-x-4">
                <Image src={secondprofile} alt="profile image" width={50} height={50} className="rounded-full"/>
                <div>
                    <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg font-bold">Ronsimar Rigoni</p>
                    <p className="text-[#1f073b] font-faktum text-xs sm:text-sm">Coprodutor</p>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
            <Rating value={5} className="space-x-2 mb-4" cancel={false} style={{ color: '#ffbc00' }}/>
            <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg mb-4">
                Feliz com Spedy. Emitir notas manualmente era desafiador e demorado. Com um clique, vendas de infoprodutos viram notas, otimizando tempo e mantendo contabilidade em dia. Suporte rápido e atencioso.
            </p>
            <div className="flex items-center space-x-4">
                <Image src={thirdprofile} alt="profile image" width={50} height={50} className="rounded-full"/>
                <div>
                    <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg font-bold">Dr. Douglas Garcia</p>
                    <p className="text-[#1f073b] font-faktum text-xs sm:text-sm">Fisioterapeuta e Infoprodutor</p>
                </div>
            </div>
        </div>
    </div>
</div>

{/* GARANTIA */}
<div style={{backgroundColor: '#1f073b'}} className="px-4 sm:px-6 lg:px-8 py-12 mt-12 text-center sm:text-right">
    <div className="max-w-7xl mx-auto">
        <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-faktum text-[#ffbc00] mb-4">Garanta sua satisfação com risco zero</p>
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-faktum text-white mb-2">Se o Spedy não superar suas expectativas em até 30 dias, prometemos</p>
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-faktum text-white mb-4">reembolso total, sem burocracia. Sua confiança, nossa prioridade.</p>
        <button className="mb-4 bg-[#ffbc00] font-faktum p-2 sm:p-3 rounded-full flex items-center justify-center gap-1 text-[#1f073b] mx-auto sm:ml-auto text-sm sm:text-base lg:text-lg">
            Quero começar
            <MoveRight size={20} strokeWidth={1.5} />
        </button>
    </div>
</div>

            <Plans/>
            <Faq/>
        </>
    )
}

