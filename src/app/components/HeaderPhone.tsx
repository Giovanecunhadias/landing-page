'use client'

import { useWindowWidth } from '@/hooks/usewidth'
import Image from 'next/image'
import { HeaderPhoneNotificationTwo } from './header-phone-notification-two'
import { HeaderPhoneNotificationOne } from './header-phone-notification-one'

export function HeaderPhone() {
  const { windowWidth } = useWindowWidth()

  return (
    <div className='w-full  h-full mt-10 flex items-end '>
    <div className="mx-auto h-full   justify-end w-full max-w-[79.9375rem]">
      <div className="w-full relative  h-full  flex-col">
        <Image
          src={'/phone_header.avif'}
          layout="fill"
          className='h-full '
          alt="Seta para baixo"
          quality={100}
          objectFit={windowWidth > 1276 ? 'contain' : 'cover'}
        />

        <div className="absolute flex flex-col items-center w-full gap-[0.75rem] left-2/4 -translate-x-2/4 top-[35%]">
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      </div>
    </div>
    </div>
  )
}