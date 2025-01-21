"use client"
import { MoveRight } from 'lucide-react'
import Plans from "./plans"
import InfinityList from "./infinity_list"
import Nav from './responsive_navbar'
import Faq from './faq'
import Ratings from './ratings'
import Garantia from './garantia'
import WhatsappButton from './wpBtn/whatsapp_button'
import Features from './features'
import Integrations from './Integrations'
import Proposal from './proposal'
import Rodape from './rodape'
import InfiniteScroll from './scrollhorizontalanimation'
import { HeaderPhone } from './HeaderPhone'
import Performance from './performance'
import { useEffect, useRef, useState } from 'react'


export default function Start() {
    const arrowColor = '#D93D8D'

    const [isInView, setIsInView] = useState(true); // Estado que indica se a div está visível
    const headerRef = useRef<HTMLDivElement>(null); // Referência para o elemento HeaderPhone

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Se a div não estiver visível, atualiza o estado
                setIsInView(entry.isIntersecting);
            },
            {
                root: null, // Visibilidade relativa à viewport
                rootMargin: '0px', // Sem margem adicional
                threshold: 0.2, // Considera visível se 10% da div estiver visível
            }
        );

        // Inicia a observação do header
        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        // Cleanup do observer quando o componente for desmontado
        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <>
            <Nav isInView={isInView} />
            
            <InfiniteScroll/>
            <WhatsappButton/>
            
            <div style={{backgroundColor: '#1F073B'}} className="pt-8   pt-22
            ">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-faktum animate-delay-0 animate-duration-10000 animate-fade-down">
                        Foque <span className="text-[#d93d8d]">em vender</span> e deixe as <br className="hidden sm:inline" />
                        Vendas com <span className="text-[#d93d8d]">a Ameii.</span>
                    </h1>
                    
                    <p className="flex items-center text-white font-arial mt-4 gap-2  text-sm sm:text-base lg:text-lg">
                        Integre <MoveRight color={arrowColor} className="mx-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> Venda <MoveRight color={arrowColor} className="mx-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> 
                        <span className="text-[#d93d8d] font-faktum">O resto é com o Ameii</span>
                    </p>
                </div>
                
                <div ref={headerRef} className="flex h-screen flex-col w-full  overflow-hidden  relative">
                    <HeaderPhone/>
                    <div className='min-h-[4px]  absolute bottom-0 w-screen bg-[linear-gradient(90deg,_rgb(95,_194,_238)_0%,_rgb(217,_61,_141)_100%)]' ></div>
                </div>
            </div>

            <Features/>
            <InfinityList/>
            {/* INTEGRAÇÕES */}
            <Integrations/>
            <Performance/>
            {/* DEPOIMENTOS */}
            <Ratings/>
            {/* GARANTIA */}
            <Garantia/>              
            <Plans/>
            <Faq/>
            {/*COMECE AGORA*/}
            <Proposal/>
            {/*RODAPE*/}
            <Rodape/>
            
        </>
    )
}

