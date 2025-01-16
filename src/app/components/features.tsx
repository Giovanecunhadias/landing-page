import integreimage from '../assets/image/1.jpeg'
import configureimage from '../assets/image/3.png'
import automatizeimage from '../assets/image/2.png'
import Image from 'next/image';
export default function Features() {
    return (            
        <>
            {/* INTEGRE */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
                

                <div className="md:w-1/2">
                    <Image src={integreimage} alt="Integre" className="w-full max-w-[330px] h-auto" />
                </div>
                <div className="md:w-1/2 animate-jump-in">
                    <div style={{backgroundColor: 'rgba(1, 177, 105, 0.5)'}} className="rounded-full w-24 text-center mb-4">
                        <span className="font-faktum text-[#02b16a] text-sm sm:text-base">INTEGRE</span>
                    </div>
                    <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Conecte <span className="text-[#01B169]">sua</span><br />
                        <span className="text-[#01B169]">plataforma</span><br />
                        de pagamento.
                    </h2>
                    <p className="font-faktum text-sm sm:text-md lg:text-lg mt-2">+ de 30 integrações disponíveis.</p>
                </div>
            
            </div>

            {/* CONFIGURE */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
                <div className="md:w-1/2">
                    <Image src={configureimage} alt="Configure" className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 animate-jump-in">
                    <div style={{ backgroundColor: 'rgba(217, 61, 141, 0.5)' }} className="rounded-full w-28 text-center mb-4">
                        <span className="font-faktum text-[#d93d8d] text-sm sm:text-base">CONFIGURE</span>
                    </div>
                    <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        O Spedy entrega<br />
                        as <span className="text-[#d93d8d]">suas vendas</span><br />
                        e emite as notas.
                    </h2>
                    <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                        Você escolhe: na cobrança, após o<br className="hidden sm:inline" />
                        pagamento ou após a garantia.
                    </p>
                </div>
            </div>

            {/* AUTOMATIZE */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
                <div className="md:w-1/2">
                    <Image src={automatizeimage} alt="Automatize" className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 animate-jump-in">
                    <div style={{ backgroundColor: 'rgba(95, 194, 238, 0.5)'}} className="rounded-full w-28 text-center mb-4">
                        <span className="font-faktum text-[#5fc2ee] text-sm sm:text-base">AUTOMATIZE</span>
                    </div>
                    <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Enviamos a nota<br />
                        fiscal para <span className="text-[#5fc2ee]">seu</span><br />
                        <span className="text-[#5fc2ee]">cliente</span> na hora!
                    </h2>
                    <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                        Automaticamente e poupando seu<br className="hidden sm:inline" />
                        valioso tempo!
                    </p>
                </div>
            </div>
        </>
    );
}