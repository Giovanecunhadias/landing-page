import Image from "next/image";

export default function YeverLines() {
    return(
        <div className="py-6">
            <div className="relative lg:w-fit w-[45vh]">
            <Image width={850} height={490} src={"/yever_lines.svg"} alt="image_lines" className="lg:w-[850px] invisible lg:h-[490px] w-[300px] h-[200px]" style={{zIndex: -1}}></Image>
            <div
            className="w-3 h-3 bg-[#3D8DD9] rounded-full absolute lg:top-[50%] lg:left-[15%] top-[52%] left-[5%] animate-bolinha-left opacity-70 shadow-bolinha-blue"
           
          ></div>
            <div
            className="w-3 h-3 bg-[#3D8DD9] rounded-full absolute  lg:top-[50%] lg:left-[5%]  top-[52%] left-[3%] animate-bolinha-left opacity-70 shadow-bolinha-blue"
          
          ></div>
            <div
            className="w-3 h-3 bg-[#3D8DD9] rounded-full absolute lg:top-[50%] lg:left-[25%] top-[52%] left-[8%] animate-bolinha-left opacity-70 shadow-bolinha-blue"
        
          ></div>

<div
            className="w-3 h-3 bg-[#D93D8D] rounded-full lg:top-[50%] lg:right-[15%] top-[52%] right-[5%] absolute animate-bolinha-right opacity-70 shadow-bolinha-pink"
          
          ></div>

<div
            className="w-3 h-3 bg-[#D93D8D] rounded-full lg:top-[50%] lg:right-[5%] top-[52%] right-[3%]  absolute animate-bolinha-right opacity-70 shadow-bolinha-pink"
       
          ></div>

<div
            className="w-3 h-3 bg-[#D93D8D] rounded-full lg:top-[50%] lg:right-[25%] top-[52%] right-[8%] absolute animate-bolinha-right opacity-70 shadow-bolinha-pink"
          // Responsivo com %
          ></div>
            <Image width={850} height={490} className="absolute lg:w-[850px] lg:h-[490px]   top-0 left-0" src={"/yever_connections.svg"} alt="image_lines"/>
            <Image src={'/icons/utmify.jpeg'} className="absolute lg:bottom-1 lg:right-[138px] lg:w-[74px] p-0.5 lg:p-4 lg:h-[76px] bottom-[-7px] right-[277px]  w-[26px] h-[28px] flex items-center justify-center" alt="utmify" width={74} height={76}/>
            <Image src={'/icons/reflow.png'} className="absolute rounded-full lg:bottom-[77px] lg:p-4 p-0.5   lg:right-0 lg:w-[74px] w-[26px] h-[28px] lg:h-[76px] bottom-[-7px] right-[62px]  flex items-center justify-center" alt="expay" width={73} height={76} />
            <Image src={'/icons/pagdrop.png'} className="absolute lg:bottom-1  lg:left-[138px] bottom-[85%]  left-[45px] rounded-sm lg:w-[74px] w-[27px] h-[30px] lg:h-[76px] flex items-center justify-center" alt="azcend" width={73} height={76}/>
            <Image src={'/icons/expay.png'} className="absolute top-[127px] lg:top-[97px] rounded-sm right-[2px] lg:right-0 flex  lg:w-[74px] w-[28px] h-[30px] lg:h-[76px] items-center justify-center" alt="expay" width={73} height={76}/>
            <Image src={'/icons/eduzz.png'} className="absolute lg:top-[108px] lg:left-[205px] top-[98px] right-[26px] flex items-center lg:w-[50px] w-[18px] h-[21px] lg:h-[50px] justify-center" alt="eduzz" width={50} height={50}/>
            <Image src={'/icons/asaas.png'} className="absolute lg:p-3 p-0.5 lg:left-[101px] rounded-full lg:top-[-2px] top-[43px] left-[85px] flex items-center lg:w-[73px] w-[26px] h-[29px] lg:h-[76px] justify-center" alt="asaas" quality={100} width={73} height={76} />
            <Image src={'/icons/woo.png'} quality={100} className="absolute lg:p-3 p-0.5 lg:top-[95px] lg:right-[192px] top-[1px] right-[45px]  lg:w-[74px] w-[26px] h-[29px] lg:h-[76px] rounded-full  flex items-center justify-center" alt="woocommerce" width={77} height={76}/>
            <Image src={'/icons/reportana.ico'}  className="absolute lg:p-4 lg:right-[100px] lg:top-[-2px] top-[42px] right-[85px]  rounded flex lg:w-[74px] w-[26px] h-[29px] lg:h-[76px] items-center justify-center" alt="shopify" width={73} height={76} quality={100}/>
            <Image src={'/icons/sharkfy.png'} className="absolute rounded-full lg:top-[217px] lg:p-4 lg:right-[47px]  top-[42px] right-[2px]  lg:w-[74px] w-[26px] h-[29px] lg:h-[76px]  flex items-center justify-center" alt="reoportana" width={74} height={76}/>
            <Image src={'/logo3.png'} className="absolute lg:top-[180px] lg:right-[350px] top-[85px] right-[157px] flex items-center lg:w-[150px] w-[45px] h-[48px] lg:h-[160px] justify-center" alt="logo" width={150} height={60}/>
        </div> 
        </div>
        
        
    )
}