

"use client"
import React, { useState } from "react"
import { CircleUserRound } from "lucide-react"
import Link from "next/link" 

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonClasses = 'text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg trasition duration-300'
    const navClasses = 'flex border rounded-2xl px-5 py-1 gray-100 flex items-center' 
    const startNow = 'bg-indigo-600 border rounded-2xl font-bold'
    const navStartNow = 'bg-indigo-600 border rounded-2xl font-bold items-center p-2 mx-8'
    
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
        <div className="flex row">
            <Link href={""} className={navClasses}><CircleUserRound/>Entrar</Link>
            <Link href={""} className={navStartNow}><p>Comece já</p></Link>
        </div>
            
        </>
    )
    const navCenterLinks= (
        <>
            <div className="flex justify-center">
                <Link href={""} className={navClasses}>Preços</Link>
            </div>
        </>
    )
    return(
        <nav className="bg-gray-800 text-white w-full fixed ">
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex flex-row w-full justify-between">
                        <div className="text-x1 font-bold">
                            Brand Name
                        </div>
                        {navCenterLinks}
                        <div className="hidden md:block">
                            
                            <div className="flex ml-10  items-baseline space-x-2">
                                {navLinks}
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={()=>{setIsOpen(!isOpen)}} type="button" className="fill-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                        </button>
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