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
    
    <div className="hidden lg:flex mx-auto  justify-center h-[69vh] w-full max-w-[79.9375rem]">
      <div className="w-full relative  h-full  flex-col">
        <Image
            src={'/phone_header.avif'}
            width={windowWidth}
            alt="Seta para baixo"
            height={windowHeight}
            quality={100}
            objectFit={windowWidth > 1276 ? 'contain' : 'cover'}
          />
        
        <div className={`absolute flex flex-col items-center w-full gap-[0.75rem]   -translate-x-1/4  top-[35%] left-2/4 `}>
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
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
    <div className="w-full max-w-[79.9375rem] mx-auto">
      <div className="relative w-full h-[37.3125rem]">
        <div className='py-20'>
        <Image
          src="/phone_header.avif"
          alt="Phone interface"
          fill
          quality={100}
          style={{
            objectFit: windowWidth > 1276  ? "contain" : "cover",
            
          }}

          sizes="(max-width: 1276px) 100vw, 1276px"
        /></div>
        
        <div className="absolute w-full max-w-[350px] flex flex-col gap-3 left-[250px] top-[32%] -translate-x-1/2">
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      </div>
    </div>
    
    </>
    
    
  )
}