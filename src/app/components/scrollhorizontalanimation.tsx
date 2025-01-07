import Image from "next/image"
import kiwify from "../assets/image/kiwify.png"
export default function InfiniteScroll () {
    return(
        <div className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:jusitfy-start [&_li]:mx-8 [&_imd]:max-w-none animate-infinite-scroll-horizontal">
                <li>
                    <Image
                        src={kiwify}
                        width={150}
                        height={150}
                        alt="kiwify"
                    />
                </li>
                <li>
                    <Image/>
                </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-horizontal">
                <li>
                    <Image
                        src={kiwify}
                        alt="kiwify"
                    />
                </li>
            </ul>
        </div>
    )
}