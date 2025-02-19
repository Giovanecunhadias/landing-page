'use client'

import { useWindowWidth } from '@/hooks/usewidth'
import { useWindowHeight } from '@/hooks/useHeight'
import Image from 'next/image'
import { HeaderPhoneNotificationTwo } from './header-phone-notification-two'
import { HeaderPhoneNotificationOne } from './header-phone-notification-one'

export function HeaderPhone() {
  const { windowWidth } = useWindowWidth()
  const { windowHeight } = useWindowHeight()
  return (
    <>
    <div className='hidden lg:flex   lg:justify-center relative rounded-inherit w-full   h-fit min-h-fit  '>
      <Image
      src={'https://framerusercontent.com/images/mFl5E44fiCWgJcpa9EXaSVb6Zw.png'}
     fill={false}
     width={windowWidth * 0.9}
     height={windowHeight * 0.7}
      quality={100}
      alt='imagem'
      />
       
   
      
      
        
        
        <div style={{bottom: windowHeight * 0.3}}  className={`hidden lg:flex absolute top-[40%]  flex-col items-center w-full gap-[0.75rem]   -translate-x-1/2   left-2/4 `} >
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      
        </div>
    
    {/* <div className="lg:hidden flex flex-col items-center justify-center h-screen w-screen relative">
      <div className="absolute h-full w-screen">
        <Image
          src={'/phone_header.avif'}
          alt="Seta para baixo"
          quality={100}
          width={windowWidth}
          height={windowHeight}
          objectFit={windowWidth > 1276 ? 'contain' : 'cover'}
        />
         Notificações sobrepostas à imagem 
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-full px-4">
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      </div>
    </div> */}
   
  
   <div className="lg:hidden w-screen h-fit mt-5 justify-center items-end flex ">
    <div className='flex flex-col  relative   h-[70vh] md:h-[80vh] w-[100%]   md:w-full'>
   <Image
      src="https://framerusercontent.com/images/mFl5E44fiCWgJcpa9EXaSVb6Zw.png"
      alt="Imagem"
     className='absolute bottom-0 '
      quality={100}
      objectFit='cover'
      fill  
     // Isso ajusta automaticamente o tamanho
    />



<div style={{bottom: windowHeight * 0.3}}  className={`lg:hidden flex absolute   flex-col items-center w-full gap-[0.75rem] top-[35%]  -translate-x-1/2   left-2/4 `} >
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
    </div>
    </div>
    
   
    
    </>
    
    
  )
}


{/*
  <div className="flex w-full py-20 max-h-[300px] items-end  lg:hidden">
      
        
        <Image
          src="/phone_header.avif"
          alt="Phone interface"
          fill
          quality={100}
          style={{
            objectFit: windowWidth > 1276  ? "contain" : "cover",
            
          }}
          sizes='(max-width: 200px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />

          
        
        
        <div className={`flex absolute  flex-col items-center w-full gap-[0.75rem]   -translate-x-1/2  top-[35%] left-2/4 `}>
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      </div>
  
  
  
  
  */}