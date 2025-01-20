'use client'

import { useWindowWidth } from '@/hooks/usewidth'
import Image from 'next/image'
import { HeaderPhoneNotificationTwo } from './header-phone-notification-two'
import { HeaderPhoneNotificationOne } from './header-phone-notification-one'

export function HeaderPhone() {
  const { windowWidth } = useWindowWidth()

  return (
    <div className='w-full h-full '>
    <div className="mx-auto mt-[1.875rem] h-full justify-end w-full max-w-[79.9375rem]">
      <div className="w-full relative h-full flex flex-col">
        <Image
          src={'/phone_header.avif'}
          layout="fill"
          className='h-3/6'
          alt="Seta para baixo"
          quality={100}
          objectFit={windowWidth > 1276 ? 'cover' : 'cover'}
        />

        <div className="absolute flex flex-col items-center  gap-[0.75rem] left-2/4 -translate-x-2/4 top-[45%]">
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      </div>
    </div>
    </div>
  )
}