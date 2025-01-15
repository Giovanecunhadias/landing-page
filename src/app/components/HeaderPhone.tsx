'use client'

import { useWindowWidth } from '@/hooks/usewidth'
import Image from 'next/image'
import { HeaderPhoneNotificationTwo } from './header-phone-notification-two'
import { HeaderPhoneNotificationOne } from './header-phone-notification-one'

export function HeaderPhone() {
  const { windowWidth } = useWindowWidth()

  return (
    <div className='w-full h-[37.3125rem]'>
    <div className="mx-auto mt-[1.875rem] w-full max-w-[79.9375rem]">
      <div className="w-full relative h-[37.3125rem]">
        <Image
          src={'/phone_header.avif'}
          layout="fill"
          alt="Seta para baixo"
          quality={100}
          objectFit={windowWidth > 1276 ? 'contain' : 'cover'}
        />

        <div className="absolute flex flex-col gap-[0.75rem] left-2/4 -translate-x-2/4 top-[32%]">
          <HeaderPhoneNotificationOne />
          <HeaderPhoneNotificationTwo />
        </div>
      </div>
    </div>
    </div>
  )
}