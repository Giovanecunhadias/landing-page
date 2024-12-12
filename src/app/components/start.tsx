"use client"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import phone from '@/app/assets/image/phone.png'
export default function Start(){
    const arrowColor = '#D93D8D'
    
    return(
        
        <>
            <div style={{backgroundColor: '#1F073B'}} className="pt-8">
                <div className="flex  justify-center">
                    <p className="flex row text-white text-5xl font-faktum  ">Foque <span className="ml-2 mr-2 text-[#d93d8d]" > em vender</span>e deixe as </p>
                </div>
                <div className="flex justify-center">
                    <p className="text-white text-5xl font-faktum">notas fiscais com<span className="text-[#d93d8d] ml-1">o Spedy.</span></p> 
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
            
            
        </>
    )
}