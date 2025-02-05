import Image from "next/image";

export default function YeverLines() {
    return(
        <div className="py-6">
            <div className="hidden lg:flex relative">
            <Image width={850} height={490} src={"/yever_lines.svg"} alt="image_lines" className="" style={{zIndex: -1}}></Image>
            <Image width={850} height={490} className="absolute top-0 left-0" src={"/yever_connections.svg"} alt="image_lines"/>
            <Image src={'/icons/utmify_symbol.png'} className="absolute bottom-4 right-[150px] flex items-center justify-center" alt="utmify" width={50} height={50}/>
            <Image src={'/icons/paguesafe_symbol.ico'} className="absolute bottom-[84px] right-[6px] flex items-center justify-center" alt="paguesafe" width={60} height={60} />
            <Image src={'/icons/cropped-icone.webp'} className="absolute bottom-4 left-[150px] flex items-center justify-center" alt="azcend" width={50} height={50}/>
            <Image src={'/icons/stripe.ico'} className="absolute top-[104px] right-[6px] flex items-center justify-center" alt="azcend" width={60} height={60}/>
            <Image src={'/icons/eduzz.png'} className="absolute top-[104px] left-[205px] flex items-center justify-center" alt="eduzz" width={50} height={50}/>
            <Image src={'/icons/asaas.ico'} className="absolute top-1 left-[106px] flex items-center justify-center" alt="asaas" width={60} height={60} />
            <Image src={'/icons/woo.webp'} className="absolute top-[105px] right-[205px] flex items-center justify-center" alt="woocommerce" width={50} height={50}/>
            <Image src={'/icons/summit.webp'} className="absolute top-1 right-[106px] flex items-center justify-center" alt="shopify" width={60} height={60}/>
            <Image src={'/icons/reportana.ico'} className="absolute top-[223px] right-[55px] flex items-center justify-center" alt="reoportana" width={60} height={60}/>
            <Image src={'/logo3.png'} className="absolute top-[180px] right-[350px] flex items-center justify-center" alt="logo" width={150} height={60}/>
        </div> 
        </div>
        
        
    )
}