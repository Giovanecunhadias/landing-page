import Image from "next/image";

export default function Ameiitwo() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full px-4 ">
        <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col bg-white border rounded-md p-4 md:p-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col items-start justify-center">
                <p className="font-bold font-faktum text-start text-lg md:text-xl mb-2">
                  Venda mais com Upsell One-Click
                </p>
                <p className="font-faktum text-start text-sm md:text-base">
                  Ofereça uma nova oferta imediatamente após a conclusão da
                  compra, quando os consumidores estão ainda engajados e
                  propensos a considerar novas ofertas, finalizando uma nova
                  compra em apenas um clique, sem a necessidade de digitar
                  novamente todos os dados.
                </p>
              </div>
              <div className="w-full">
                <Image
                  src="/item4-new.png"
                  alt="imagem"
                  width={500}
                  height={450}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/item5-new.png"
                  alt="imagem"
                  width={500}
                  height={450}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col border rounded-md bg-white p-4 md:p-8 gap-2">
              <div className="w-full">
                <Image
                  src="/uniformizadordepele.svg"
                  alt="imagem"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="font-bold font-faktum text-lg md:text-xl">
                Aumente seu ticket com o Order Bump
              </p>
              <p className="text-sm md:text-base">
                Aproveite o momento crucial de finalização de compra do
                consumidor e ofereça um ou mais produtos adicionais no tempo
                exato para conseguir aumentar ainda mais seu ticket médio.
              </p>
            </div>
            <div className="flex flex-col border rounded-md bg-white p-4 md:p-8 gap-2">
              <div className="w-full">
                <Image
                  src="/definestatus.svg"
                  alt="imagem"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="font-bold font-faktum text-lg md:text-xl">
                Crie relatórios da forma que desejar
              </p>
              <p className="text-sm md:text-base">
                A Ameii oferece um relatório no estilo arrasta e solta,
                permitindo que você selecione as colunas desejadas e determine a
                ordem que mais lhe convier! Isso simplifica consideravelmente a
                análise para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
