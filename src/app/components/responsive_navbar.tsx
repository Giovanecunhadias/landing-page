

"use client"
import React, { useState } from "react"
import {CircleUserRound } from "lucide-react"
import logo from  "../assets/image/logo3.png"
import Link from "next/link" 
import Image from "next/image"

export default function Nav({ isInView }: { isInView: boolean }) {
    const [isOpen, setIsOpen] = useState(false)
    const buttonClasses = 'text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg trasition duration-300'
    const navClasses = `
  relative font-faktum leading-tight inline-block text-center 
  after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] 
  after:w-0 after:h-[2px] after:bg-[#d93d8d] after:transition-all 
  after:duration-300 after:transform after:-translate-x-1/2 
  hover:after:w-full
  ${isInView ? 'text-white' : 'text-[#1f073b]'}
`

    const startNow = 'bg-indigo-600 border rounded-2xl font-bold'
    const navStartNow = 'bg-[#d93d8d] border border-[#d93d8d] font-faktum rounded-full font-bold items-center px-4 py-2  hover:text-underline'
    
    const buttons = (
        <>
            <button className={buttonClasses}>Preços</button>
            <button className={buttonClasses}>Dúvidas</button>
            <button className={buttonClasses}>Blog</button>
            <button className={buttonClasses}>
                <div className="flex items-center">
                    <CircleUserRound/>
                    <p>Entrar</p>
                </div>
            </button>
            <button className={startNow}>Comece já</button>
        </>
    )
    const navLinks = (
        <>
        <div className="flex-row flex gap-4 justify-end">
            <Link href={""} className={`flex flex-row border border-1 px-6 gap-2  items-center font-faktum rounded-full p-2 ${isInView ? "text-white": "text-[#1f073b] border-[#1f073b]"} hover:transform transition-transform duration-300 hover:scale-90 hover:bg-[#1f073b] hover:text-white`}><CircleUserRound className="size-4"/>Entrar</Link>
            <Link href={""} className={`${navStartNow} hover:transform transition-transform duration-300 hover:scale-90 `}><p  >Comece já</p></Link>
        </div>
            
        </>
    )
    const navCenterLinks= (
        <>
            <div className={` hidden lg:flex  fixed left-1/2 top-[25px] -translate-x-1/2 gap-4 h-min `}>
                <Link href={""}  className={`${isInView ? "text-white": "text-[#1f073b]"}${navClasses}`}>Início</Link>
                <Link href={""}  className={navClasses}>Como Funciona</Link>
                <Link href={""} className={navClasses}>Integrações</Link>
                <Link href={""} className={navClasses}>Preços</Link>
                <Link href={""} className={navClasses}>Dúvidas</Link>
            </div>
        </>
    )
    return(
        <nav  className={` text-white w-full sticky z-20 h-fit top-0 ${isInView ? "bg-[#1f073b]" : "bg-white"}`}>
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex flex-row items-center w-full justify-between">


                        <div className="text-x1 font-bold">
                            <Image src={logo} width={35} height={35} alt="" />
                        </div>

                        
                        {navCenterLinks}


                        <div className="hidden md:flex ">
                            
                            <div className="flex justify-end  items-baseline space-x-2">
                                {navLinks}
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            {
                isOpen && (
                    <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
                        {buttons}
                    </div>
                )
            }
        </nav>
    )
}