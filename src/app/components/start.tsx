"use client"
import { ArrowRight, MoveRight } from "lucide-react"
import Image from "next/image"
import phone from '@/app/assets/image/phone.png'
export default function Start(){
    const arrowColor = '#D93D8D'

    return(
        
        <>
            <div style={{backgroundColor: '#1F073B'}} className="pt-8">
                
                
                <div className="flex  justify-center">
                    <p className="flex row text-white text-5xl font-faktum  animate-delay-0 animate-duration-10000 animate-fade-down">Foque <span className="ml-2 mr-2 text-[#d93d8d]" > em vender</span>e deixe as </p>
                </div>
                <div className="flex justify-center">
                    <p className={"text-white  text-5xl animate-delay-0 animate-duration-10000 animate-fade-down font-faktum "}>notas fiscais com<span className="text-[#d93d8d] ml-1">o Spedy.</span></p> 
                </div>
                
                    
            
                
                <div className="flex  justify-center">
                    <p className="flex text-white font-arial">Integre <MoveRight color={arrowColor}/> Venda <MoveRight color={arrowColor}/> <span className="ml-1 text-[#d93d8d]">O resto é com o Spedy</span></p>
                </div>
                <div className="flex justify-center mt-8">
                    <Image 
                        src={phone}
                        alt=""
                    />
                </div>
            </div>
            {/*------INTEGRE------*/}
            <div className="grid grid-col-6 gap-4 mt-20">
                <div className=" col-end-7 col-span-2 animate-jump-in">
                    <div className="animate-jump-in">
                    <div style={{backgroundColor: 'rgba(1, 177, 105, 0.5)'}} className="rounded-full w-24 text-center">
                        <span className="font-faktum text-[#02b16a]">INTEGRE</span>
                    </div>

                        <p className="font-faktum text-5xl">Conecte <span className="text-[#01B169]">sua</span></p>
                        <p className="font-faktum text-5xl text-[#01B169]">plataforma </p>
                        <p className="font-faktum text-5xl ">de pagamento.</p>
                        <p className="font-faktum text-md">+ de 30 integrações disponíveis.</p>
                    </div>
                    
                </div>
            </div>
            {/*----CONFIGURE----*/}
            <div className="grid grid-col-6 gap-4 mt-20">
                <div className=" col-end-7 col-span-2 animate-jump-in">
                    <div className="animate-jump-in">
                        <div style={{ backgroundColor: 'rgba(217, 61, 141, 0.5)' }} className="rounded-full w-28 text-center">
                            <span className="font-faktum text-[#d93d8d]">CONFIGURE</span>
                        </div>
                        <p className="font-faktum text-5xl">O Spedy entrega</p>
                        <p className="font-faktum text-5xl">as <span className="text-[#d93d8d]">suas vendas</span></p>
                        <p className="font-faktum text-5xl">e emite as notas.</p>
                        <p className="font-faktum text-2xl">Você escolhe: na cobrança, após o</p>
                        <p className="font-faktum text-2xl">pagamento ou após a garantia.</p>
                    </div>
                    
                </div>
            </div>
            {/*AUTOMATIZE*/}
            <div className="grid grid-col-6 gap-4 mt-20">
                <div className="col-end-7 col-span-2 animate-jump-in">
                    <div style={{ backgroundColor: 'rgba(95, 194, 238, 0.5)'}} className="rounded-full w-28 text-center">
                        <span className="font-faktum text-[#5fc2ee]">AUTOMATIZE</span>
                    </div>
                    <p className="font-faktum text-5xl">Enviamos a nota </p>
                    <p className="font-faktum text-5xl">fiscal para<span  className="text-[#5fc2ee]">seu</span></p>
                    <p className="font-faktum text-5xl"><span className="text-[#5fc2ee]">cliente</span> na hora!</p>
                    <p className="font-faktum text-2xl">Automaticamente e poupando seu </p>
                    <p className="font-faktum text-2xl">valioso tempo!</p>
                </div>
            </div>  
            {/*INTEGRAÇÕES*/}
            <div style={{backgroundColor: '#1f073b'}} className=" flex flex-col gap-2 bg-indigo-400  justify-center items-center  mb-20">
                <div style={{backgroundColor: 'rgba(217, 61, 141, 0.5)'}} className="mt-10 rounded-full w-28">
                    <p className="font-faktum text-center text-[#d93d8d]">Integrações</p>
                </div>
                <br />
                <p className="flex-none text-5xl text-white font-faktum">Encaixe o Spedy na sua operação</p>
                <p className="font-faktum text-2xl text-white">Integre com mais de 40 plataformas do mercado.</p>
                
                <button className="bg-[#D93D8D] border rounded-2xl w-32 h-8 text-white font-faktum flex items-center justify-center gap-2">
                    Ver todas
                    <ArrowRight />
                </button>


                
            </div>
            {/*PERFOMANCE*/}
            <div className="flex flex-col gap-4 justify-center items-center">
                <div style={{ backgroundColor: 'rgba(95, 194, 238, 0.5)'}} className="rounded-full w-28 text-center">
                        <span className="font-faktum text-[#5fc2ee]">PERFOMANCE</span>
                </div>
                <p className="font-faktum text-5xl ">Tecnologia para <span className="text-[#5fc2ee]">economizar o seu tempo</span></p>
            </div>
            
        </>
    )
}