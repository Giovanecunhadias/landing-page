import Image from 'next/image';
import eduzz from '../assets/image/eduzz.png';
import hotmart from '../assets/image/hotmart.png';
import asaas from '../assets/image/ASAAS.png';
import shopify from '../assets/image/shopify.png';
export default function LinesFoots() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
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
            className="absolute bg-white p-4 rounded-xl"
            style={{ top: '-25%', left: '60%' }} // Responsivo com %
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
        </div>
      </div>
    </div>
  );
}
