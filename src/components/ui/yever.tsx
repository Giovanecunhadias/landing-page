import Image from "next/image";

export default function AmeiiComponent() {
  return (
    <div className="w-full px-4 md:px-6 py-8 md:py-12">
      {/* Texto Principal */}
      <div className="flex flex-col h-full items-center gap-8 md:gap-12 w-full max-w-7xl mx-auto">
        {/* Div com texto */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-0">
          <div className="flex flex-col md:w-1/2 space-y-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              NÃO PERCA MAIS VENDAS
            </p>
            <p className="text-2xl md:text-4xl font-faktum text-gray-800 leading-tight md:w-[90%]">
              Potencialize seu faturamento em até 30%
            </p>
          </div>
          <div className="md:w-1/3 text-gray-600">
            <p className="text-sm md:text-base">
              Apresentamos um conjunto completo de recursos, junto com
              ferramentas exclusivas desenvolvidas para impulsionar suas vendas!
            </p>
          </div>
        </div>

        {/* Div dos Cards */}
        <div className="flex flex-col lg:flex-row justify-center h-full gap-6 md:gap-12 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center rounded-lg border bg-white shadow-md p-4 md:p-8 w-full lg:w-[40%]">
            <Image
              src="/seusdadospurple.svg"
              width={200}
              height={200}
              alt="seus dados roxo"
              className="w-full h-auto"
            />
            <p className="text-lg md:text-xl font-faktum font-bold w-full text-gray-800 mt-4">
              Acelere as compras com o checkout 3.1
            </p>
            <p className="text-sm md:text-base text-gray-600 w-full mt-2">
              O Checkout 3.1 da Ameii representa uma evolução significativa na
              otimização da experiência do cliente durante o processo de compra.
              Com uma abordagem centrada no cliente, design intuitivo e
              personalização flexível.
            </p>
          </div>

          {/* Card 2 & 3 Container */}
          <div className="flex flex-col gap-6 w-full lg:w-[60%]">
            {/* Card 2 */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg border shadow-md p-4 md:p-8 gap-4">
              <div className="flex flex-col md:w-1/2">
                <p className="text-lg md:text-xl font-faktum font-bold text-gray-800">
                  Crie infinitos checkouts customizáveis
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  O Infinity Checkout representa uma nova dimensão de
                  flexibilidade e versatilidade. Imagine a capacidade de criar
                  múltiplos checkouts personalizados para diferentes públicos.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/11.png"
                  width={300}
                  height={300}
                  alt="checkout customizável"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg border shadow-md p-4 md:p-8 gap-4">
              <div className="flex flex-col md:w-1/2">
                <p className="text-lg md:text-xl font-faktum font-bold text-gray-800">
                  Crie infinitos checkouts customizáveis
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  O Infinity Checkout representa uma nova dimensão de
                  flexibilidade e versatilidade. Imagine a capacidade de criar
                  múltiplos checkouts personalizados para diferentes públicos.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/22.png"
                  width={300}
                  height={300}
                  alt="checkout customizável"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
