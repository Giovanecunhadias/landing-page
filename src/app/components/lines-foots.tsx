import Image from 'next/image';
import eduzz from '../assets/image/eduzz.png';
import hotmart from '../assets/image/hotmart.png';
import asaas from '../assets/image/ASAAS.png';
import shopify from '../assets/image/shopify.png';
import greenn from '../assets/image/green.webp';
import braip from '../assets/image/braip.png';
import utmify from '../assets/image/utmify.png'
import woocommerce from '../assets/image/woocommerce.webp'
export default function LinesFoots() {
  return (
    <>
    <div className="relative w-full h-[500px] hidden lg:flex items-center justify-center">
      {/* Linhas e bolinhas */}
      <div className="relative flex items-center gap-4">
        {/* Linha azul com bolinhas e logos */}
        <div className="relative">
          <div
            className="w-3 h-3 bg-[#3D8DD9] rounded-full absolute animate-bolinha-left opacity-70 shadow-bolinha-blue"
            style={{ top: '47%', left: '30%' }} // Responsivo com %
          ></div>
          <Image src={'/line-blue.svg'} alt="linha azul" width={500} height={500} />
          <div
            className="w-3 h-3 bg-[#3D8DD9] rounded-full absolute animate-bolinha-left opacity-70 shadow-bolinha-blue"
            style={{ top: '47%', left: '5%' }} // Responsivo com %
          ></div>
          {/* Adicionar Logos Azul */}
          
          <div 
          className='absolute bg-white  rounded-3xl'
          style={{left: '25%'}}
          >
            <Image className='rounded-2xl' src={woocommerce} alt='woocommerce' width={120} height={100}/>
          </div>
          <div
          className='absolute bg-white p-6 rounded-xl'
          style={{left:'65%'}}
          >
               <Image src={utmify} alt='utmify' width={100} height={100}/>
          </div>
          <div
            className="absolute bg-white p-4 rounded-xl"
            style={{ top: '-25%', left: '67%' }} // Responsivo com %
          >
            <Image src={asaas} alt="ASAAS" width={100} height={100} />
          </div>
          <div
            className="absolute bg-white p-4 rounded-xl"
            style={{ top: '-25%', left: '25%' }} // Responsivo com %
          >
            <Image src={shopify} alt="Shopify" width={100} height={100} />
          </div>
        </div>
        <div className=''></div>
        {/* Logo no centro */}
        <div className="relative">
          <Image src={'/favicon.ico'} alt="logo" className="animate-pulse infinite" width={120} height={120} />
        </div>

        {/* Linha rosa com bolinhas e logos */}
        <div className="relative">
          <div
            className="w-3 h-3 bg-[#D93D8D] rounded-full absolute animate-bolinha-right opacity-70 shadow-bolinha-pink"
            style={{ top: '47%', right: '30%' }} // Responsivo com %
          ></div>
          <Image src={'/line-pink.svg'} alt="linha rosa" width={500} height={500} />
          <div
            className="w-3 h-3 bg-[#D93D8D] rounded-full absolute animate-bolinha-right opacity-70 shadow-bolinha-pink"
            style={{ top: '47%', right: '5%' }} // Responsivo com %
          ></div>
          
          {/* Adicionar Logos Rosa */}
          <div
            className="absolute bg-white rounded-xl p-6"
            style={{ top: '-25%', right: '67%' }} // Responsivo com %
          >
            <Image src={eduzz} alt="Eduzz" color="" width={100} height={100} />
          </div>
          <div
            className="absolute bg-white rounded-xl p-4"
            style={{ top: '-25%', right: '27%' }} // Responsivo com %
          >
            <Image src={hotmart} alt="Hotmart" width={100} height={100} />
          </div>
          <div
          className='absolute bg-white rounded-xl p-4'
          style={{right: '67%'}}
          >
            <Image src={greenn} alt='green' width={100} height={100}/>
          </div>
          <div
          className='absolute bg-white rounded-xl p-4'
          style={{ right: '25%'}}
          >
            <Image src={braip} alt='green'  width={90} height={30}/>
          </div>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-4 lg:hidden  '>
      <div className='bg-white rounded-xl p-4'>
        <Image src={asaas} alt='asaas'/>
      </div> 
      <div className='bg-white rounded-xl p-4'>
        <Image src={hotmart} alt='asaas' width={150} height={100}/>
      </div>
      <div className='bg-white rounded-xl p-4'>
        <Image src={greenn}  alt='green'/>
      </div>
      <div className='bg-white rounded-xl p-4'>
        <Image src={shopify} alt='green'/>
      </div>
      <div className='bg-white rounded-xl p-4'>
        <Image src={eduzz} alt='green'/>
      </div>
    </div>
    </>
  );
}
