'use client'
import { Sparkle, Check,X } from "lucide-react"
{/*
  
<div className='flex flex-col items-center justify-center mb-8'>
            <div className='text-center rounded-full w-56 ' style={{backgroundColor:'rgba(217, 61, 141, 0.5)'}}>
                <span className='font-faktum text-[#d93d8d]'>PLANOS & PREÇOS</span>
            </div>
            <p className='text-[#1f073b] font-faktum text-4xl'>Junte-se a Spedy e faça o seu negócio decolar!</p>
        </div>  
*/}




export default function Plans() {
  return (
    <div className="flex justify-center">
      <div className="h-56 grid grid-cols-3 gap-4 content-around">
        <div className="rounded-full">
          <p className="text-center font-bold font-faktum text-[#1f073b] flex items-center justify-center"><Sparkle className="fill-[#d93d8d]" color="#d93d8d"/>PLANO</p>
          <p className="font-faktum text-center text-3xl text-[#1f073b] mb-4">Essencial</p>
          <p className="line-through text-gray-500 text-center">R$ 948,00</p>
          <p className="text-[#1f073b] text-center font-faktum text-3xl mb-3">R$ 711 <span className="text-sm">/ano</span></p>
          <p className="text-[#1f073b] font-bold font-faktum text-center mb-2">1.800 notas /ano</p>
          <p className="text-gray-500 font-faktum text-center">R$ 0,58 por nota adicional</p>
          <div className="text-sm">
            <p className="text-[#02b16a] flex flex-row items-center"><Check />Taxa de adesão grátis</p>
            <p className="flex flex-row items-center text-[1f073b]"><Check color="#02b16a"/>+ de 30 Integrações</p>
            <p className="text-[#ef6e50] flex flex-row items-center"><X />Split de notas fiscais</p>
            <p className="text-[1f073b] "><Check color="#02b16a"/>Suporte à Dropshipping</p>
          </div>
          

        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
    
  )
}

