"use client"
import { MoveRight } from 'lucide-react'
import Plans from "./plans"
import InfinityList from "./infinity_list"
import Nav from './responsive_navbar'
import Faq from './faq'
import Ratings from './ratings'
import Mockup from './component_phone'
import Garantia from './garantia'
import WhatsappButton from './wpBtn/whatsapp_button'
import Features from './features'
import Integrations from './Integrations'
import Proposal from './proposal'
import Rodape from './rodape'
import InfiniteScroll from './scrollhorizontalanimation'

export default function Start() {
    const arrowColor = '#D93D8D'

    return (
        <>
            <Nav />
            <InfiniteScroll/>
            <WhatsappButton/>
            
            <div style={{backgroundColor: '#1F073B'}} className="pt-8 px-4 sm:px-6 lg:px-8 pt-22
            ">
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
                    <Mockup/>
                    
                </div>
            </div>

            <Features/>
            <InfinityList/>
            {/* INTEGRAÇÕES */}
            <Integrations/>
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

