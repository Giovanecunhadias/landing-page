'use client'

import Image from "next/image"
import kiwify from "../assets/image/kiwify.png"
import shopify from "../assets/image/shopify.png"
import asaas from "../assets/image/ASAAS.png"
import hotmart from "../assets/image/hotmart.png"

export default function InfiniteScroll() {
    return (
        <div className="lg:hidden bg-[#1F073B] overflow-hidden py-4 sm:py-6 md:py-8">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li className="flex items-center justify-center">
                        <Image
                            src={kiwify}
                            width={100}
                            height={100}
                            alt="kiwify"
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
                        />
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="bg-blue-700 p-3 sm:p-4 md:p-5 rounded-xl">
                            <Image
                                src={asaas}
                                width={100}
                                height={100}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 filter brightness-0 saturate-100 invert object-contain"
                                alt="asaas"
                            />
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="bg-[#e0f7b6] rounded-2xl p-2 sm:p-3 md:p-4">
                            <Image
                                src={shopify}
                                width={100}
                                height={100}
                                alt="shopify"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
                            />
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="bg-[#ef4e23] rounded-xl p-3 sm:p-4 md:p-5">
                            <Image
                                src={hotmart}
                                width={100}
                                height={100}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 filter brightness-0 saturate-100 invert object-contain"
                                alt="hotmart"
                            />
                        </div>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li className="flex items-center justify-center">
                        <Image
                            src={kiwify}
                            width={100}
                            height={100}
                            alt="kiwify"
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
                        />
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="bg-blue-700 p-3 sm:p-4 md:p-5 rounded-xl">
                            <Image
                                src={asaas}
                                width={100}
                                height={100}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 filter brightness-0 saturate-100 invert object-contain"
                                alt="asaas"
                            />
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="bg-[#e0f7b6] rounded-2xl p-2 sm:p-3 md:p-4">
                            <Image
                                src={shopify}
                                width={100}
                                height={100}
                                alt="shopify"
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
                            />
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="bg-[#ef4e23] rounded-xl p-3 sm:p-4 md:p-5">
                            <Image
                                src={hotmart}
                                width={100}
                                height={100}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 filter brightness-0 saturate-100 invert object-contain"
                                alt="hotmart"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

