export default function Proposal() {
    return (
        <>
            <div className="bg-[#1f073b] text-center p-6 md:p-12">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl text-white font-faktum leading-snug md:leading-tight">
                        E aí, que tal simplificar processos fiscais da sua empresa?
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center text-center justify-center gap-4 mt-6">
                    <button className="bg-[#d93d8d] px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-faktum text-sm md:text-base">
                        Começar agora
                    </button>
                    <button className="border-[#ffff] border-solid border-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-faktum text-sm md:text-base">
                        Fale Conosco
                    </button>
                </div>
            </div>
        </>
    );
}
