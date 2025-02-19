import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitGraphIcon, Infinity, Settings, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AmeiiComponent() {

  const [selected, setSelected] = useState(1);
  return (
    <div className="w-full flex flex-col gap-20 px-4 md:px-6 py-8 md:py-12">


<div className=" flex-row h-full lg:flex hidden  gap-8 md:gap-12 w-full max-w-7xl mx-auto">
        {/* Div com texto */}
       <div className="flex flex-col min-h-full w-[25%]  gap-4">
       <span className="text-lg font-faktum ">ALGUMAS FUNCIONALIDADES DO NOSSO PRODUTO</span>


       <div onClick={() => setSelected(1)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 1 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <ShoppingCart size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Checkout Revolucionário</span>
       </div>
       <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(2)} className={`w-full  flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 2 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <GitGraphIcon size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Processo Engajador</span>
       </div>
       <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(3)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 3 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <ShoppingBag size={32} strokeWidth={2} className="" />
    <span className="text-lg w-3/6 font-faktum ">Simplicidade sem igual</span>
       </div>
 <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(4)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 4 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <Settings size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Máxima personalização</span>
       </div>
       <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(5)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 5 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <Infinity size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Infinity Stores & Infinity Checkouts</span>
       </div>

       <div className="w-full h-[2px] bg-[#D7D9E0]" />
       </div>
      
        {/* Div dos Cards */}
        <div className="flex flex-col relative lg:flex-row min-h-full gap-6 overflow-hidden  w-[75%]">

          {selected === 1 && (
             <div className="w-[65%] gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Checkout Ameii</h1>
          <p className="text-sm font-faktum text-gray-800">Imagine um processo de compra que une a simplicidade de um checkout em três etapas à agilidade de uma única página. Apresentamos o Checkout 3.1, uma inovação que redefine a maneira de vender online. </p>
          <p className="text-sm font-faktum text-gray-800">Ao utilizar nosso checkout, você poderá vivenciar um aumento de até 30% em suas vendas. Com o Checkout 3.1, desenvolvido sob as mais avançadas medidas de segurança, cada etapa do processo é cuidadosamente projetada para proteger suas transações e informações. </p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Aumente Suas Vendas:</span> Com o Checkout 3.1 da Yever, você não apenas processa pagamentos, mas também impulsiona suas vendas. Experimente um aumento potencial de até 30% nas conversões com nosso checkout.</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Segurança de Ponta a Ponta:</span> Priorizamos a segurança em cada detalhe. Nossas avançadas medidas de proteção garantem que cada transação seja segura e confiável. Protegemos suas transações e informações para que você possa vender com tranquilidade.</p>
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Experiência do Cliente Aprimorada:</span> Proporcionar uma experiência de compra tranquila é fundamental. Com o Checkout 3.1, seus clientes desfrutarão de um processo intuitivo, gameficado e fácil de usar. Cada etapa foi projetada pensando na conveniência do cliente, resultando em mais compras e satisfação garantida.</p>
          <hr></hr>
          
        <div className="flex w-full gap-4">
      <div className="flex flex-col gap-2">
      <span className="text-3xl font-faktum w-[90%]">R$ 100+  M</span>
      <span className="text-wrap w-5/6">economizados com prevenção a fraudes</span>
      </div>
      <div className="flex flex-col gap-2">
      <span className="text-3xl font-faktum w-[60%]">97%</span>
      <span className="text-wrap w-full">das pessoas tiveram uma experiéncia ótima ao utilizar nosso checkout</span>
      </div>
        </div>
      
      
          </div>
          )}

          {selected == 1 && (
            <Image
              src="/seusdadospurple.svg"
              width={400}
              height={500}
              alt="checkout"
              className="absolute overflow-none top-1/5 right-[-20%]"
             
            />
          )}
         

         {selected === 2 && (
             <div className="w-[65%] gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Progresso Engajador</h1>
          <p className="text-sm font-faktum text-gray-800">Nossa barra de progresso vertical gamificada transforma cada etapa em uma conquista.</p>
          <p className="text-sm font-faktum text-gray-800">A medida que seus clientes avançam, eles sentirão a empolgação de cada passo concluído.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Imagine guiar seus usuários </span> por um percurso visualmente estimulante, à medida que eles avançam em direção aos seus objetivos. Cada passo concluído é celebrado com animações sutis e marcadores vibrantes, criando uma conexão emocional única com a conquista.</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">A barra de progresso vertical,</span>  cuidadosamente projetada, não apenas orienta, mas também inspira. Cada avanço é um lembrete visual do progresso alcançado, alimentando a determinação do seu cliente para continuar.</p>
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Eleve a experiência do seu usuário</span> para um nível superior com o 'Progresso Empolgante'. Transforme suas interações em uma jornada de conquistas, cativando seus usuários desde o início até o sucesso merecido.</p>
          <hr></hr>
          
       
      
      
          </div>
          )}

          {selected == 2 && (
            <Image
              src="/yever/progresso-engajador.svg"
              width={500}
              height={500}
              alt="checkout"
              className="absolute top-1/5 right-[-30%]"
             
            />
          )}


{selected === 3 && (
             <div className="w-[65%] gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Simplicidade sem igual</h1>


 <p className="text-sm font-faktum mb-4 text-gray-800">Elimine a confusão e as distrações. O Checkout 3.1 concentra tudo o que é necessário em uma página perfeitamente organizada, poupando o tempo e a paciência dos seus clientes.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Conversões elevadas  </span> ao reduzir os obstáculos ao mínimo, o Checkout 3.1 aumenta as taxas de conversão. Mais vendas concluídas em menos tempo significa resultados que você pode ver e sentir.</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">O Checkout 3.1 concentra-se em oferecer</span>uma jornada de compra suave e descomplicada. Com menos etapas e menos aborrecimentos, os clientes podem se concentrar naquilo que realmente importa: a compra em si.</p>
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Experiência do cliente aprimorada</span> combinando o melhor de ambos os mundos, o Checkout 3.1 proporciona uma jornada de compra suave, rápida e gratificante, deixando seus clientes satisfeitos e ansiosos para voltar.</p>
          <hr></hr>
          
       
      
      
          </div>
          )}

          {selected == 3 && (
            <Image
              src="/yever/simplicidade.svg"
              width={500}
              height={500}
              alt="checkout"
              className="absolute top-1/5 right-[-30%]"
             
            />
          )}
         

         {selected === 4 && (
             <div className="w-[65%] gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Máxima personalização</h1>


 <p className="text-sm font-faktum mb-4 text-gray-800">A Yever possui o único checkout 100% customizável, mantenha a identidade visual da sua marca em todas as etapas da compra, fortalecendo o reconhecimento e a confiança do cliente.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">A Personalização Total  </span> não se trata apenas de estética, mas de uma conexão autêntica com os valores da sua marca. Ao ver a identidade da sua empresa manifestada em todos os detalhes do processo de compra, os clientes se sentem mais conectados e seguros em relação à sua escolha. Essa familiaridade cria um ambiente em que o cliente se sente em casa, confiante em cada etapa.</p>
         
          <hr></hr>
          
       
      
      
          </div>
          )}

          {selected == 4 && (
            <Image
              src="/yever/maxima.svg"
              width={500}
              height={500}
              alt="checkout"
              className="absolute top-1/5  right-[-30%]"
             
            />
          )}



{selected === 5 && (
             <div className="w-[65%] gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Infinity Stores & Infinity Checkout</h1>


 <p className="text-sm font-faktum mb-4 text-gray-800">A Yever apresenta a poderosa ferramenta Infinity, pronta para impulsionar suas conversões de vendas.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Infinity Stores </span> descubra a liberdade absoluta ao construir um número infinito de lojas, todas gerenciadas através de uma única conta de usuário. Aqui na Yever, não conhecemos limites quando se trata de atender às suas ambições!</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Infinity Checkout </span> imagine ter o poder de oferecer não apenas um, mas dois tipos de checkouts exclusivos: o padrão e o de remarketing. Com a Yever, isso se torna realidade. Você pode maximizar a conversão ao criar múltiplos checkouts e associá-los a produtos específicos ou promoções. Esta é a personalização sem limites que a Yever oferece para impulsionar suas vendas e otimizar a experiência do seu cliente.</p>
         
          <hr></hr>
          
       
      
      
          </div>
          )}

          {selected == 5 && (
            <Image
              src="/yever/infinity.svg"
              width={500}
              height={500}
              alt="checkout"
              className="absolute top-1/5 right-[-30%]"
             
            />
          )}
        </div>
      </div>
     
     
      <div className=" flex-col h-full flex lg:hidden  gap-8 md:gap-12 w-full max-w-7xl mx-auto">
        {/* Div com texto */}
       <div className="flex flex-col min-h-full w-full  gap-4">
       <span className="text-lg font-faktum ">ALGUMAS FUNCIONALIDADES DO NOSSO PRODUTO</span>


       <div onClick={() => setSelected(1)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 1 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <ShoppingCart size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Checkout Revolucionário</span>
       </div>
       <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(2)} className={`w-full  flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 2 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <GitGraphIcon size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Processo Engajador</span>
       </div>
       <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(3)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 3 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <ShoppingBag size={32} strokeWidth={2} className="" />
    <span className="text-lg w-3/6 font-faktum ">Simplicidade sem igual</span>
       </div>
 <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(4)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 4 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <Settings size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Máxima personalização</span>
       </div>
       <div className="w-full h-[2px] bg-[#D7D9E0]" />

       <div onClick={() => setSelected(5)} className={`w-full flex flex-row items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${selected === 5 ? 'bg-[#D93D8D] text-white' : ' text-black'} `}>
      <Infinity size={32} strokeWidth={2} className="" />
    <span className="text-lg w-full font-faktum ">Infinity Stores & Infinity Checkouts</span>
       </div>

       <div className="w-full h-[2px] bg-[#D7D9E0]" />
       </div>
      
        {/* Div dos Cards */}
        <div className="flex flex-col relative  h-full gap-6  w-full">

          {selected === 1 && (
             <div className="w-full gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Checkout Ameii</h1>
          <p className="text-sm font-faktum text-gray-800">Imagine um processo de compra que une a simplicidade de um checkout em três etapas à agilidade de uma única página. Apresentamos o Checkout 3.1, uma inovação que redefine a maneira de vender online. </p>
          <p className="text-sm font-faktum text-gray-800">Ao utilizar nosso checkout, você poderá vivenciar um aumento de até 30% em suas vendas. Com o Checkout 3.1, desenvolvido sob as mais avançadas medidas de segurança, cada etapa do processo é cuidadosamente projetada para proteger suas transações e informações. </p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Aumente Suas Vendas:</span> Com o Checkout 3.1 da Yever, você não apenas processa pagamentos, mas também impulsiona suas vendas. Experimente um aumento potencial de até 30% nas conversões com nosso checkout.</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Segurança de Ponta a Ponta:</span> Priorizamos a segurança em cada detalhe. Nossas avançadas medidas de proteção garantem que cada transação seja segura e confiável. Protegemos suas transações e informações para que você possa vender com tranquilidade.</p>
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Experiência do Cliente Aprimorada:</span> Proporcionar uma experiência de compra tranquila é fundamental. Com o Checkout 3.1, seus clientes desfrutarão de um processo intuitivo, gameficado e fácil de usar. Cada etapa foi projetada pensando na conveniência do cliente, resultando em mais compras e satisfação garantida.</p>
          <hr></hr>
          
        <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col gap-2">
      <span className="text-3xl font-faktum">R$ 100+  M</span>
      <span className="text-wrap w-5/6">economizados com prevenção a fraudes</span>
      </div>
      <div className="flex flex-col gap-2">
      <span className="text-3xl font-faktum w-full">97%</span>
      <span className="text-wrap w-full">das pessoas tiveram uma experiéncia ótima ao utilizar nosso checkout</span>
      </div>
        </div>
      
      
          </div>
          )}


         

         {selected === 2 && (
             <div className="w-full gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Progresso Engajador</h1>
          <p className="text-sm font-faktum text-gray-800">Nossa barra de progresso vertical gamificada transforma cada etapa em uma conquista.</p>
          <p className="text-sm font-faktum text-gray-800">A medida que seus clientes avançam, eles sentirão a empolgação de cada passo concluído.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Imagine guiar seus usuários </span> por um percurso visualmente estimulante, à medida que eles avançam em direção aos seus objetivos. Cada passo concluído é celebrado com animações sutis e marcadores vibrantes, criando uma conexão emocional única com a conquista.</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">A barra de progresso vertical,</span>  cuidadosamente projetada, não apenas orienta, mas também inspira. Cada avanço é um lembrete visual do progresso alcançado, alimentando a determinação do seu cliente para continuar.</p>
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Eleve a experiência do seu usuário</span> para um nível superior com o 'Progresso Empolgante'. Transforme suas interações em uma jornada de conquistas, cativando seus usuários desde o início até o sucesso merecido.</p>
          <hr></hr>
          
       
      
      
          </div>
          )}

         


{selected === 3 && (
             <div className="w-full gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Simplicidade sem igual</h1>


 <p className="text-sm font-faktum mb-4 text-gray-800">Elimine a confusão e as distrações. O Checkout 3.1 concentra tudo o que é necessário em uma página perfeitamente organizada, poupando o tempo e a paciência dos seus clientes.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Conversões elevadas  </span> ao reduzir os obstáculos ao mínimo, o Checkout 3.1 aumenta as taxas de conversão. Mais vendas concluídas em menos tempo significa resultados que você pode ver e sentir.</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">O Checkout 3.1 concentra-se em oferecer</span>uma jornada de compra suave e descomplicada. Com menos etapas e menos aborrecimentos, os clientes podem se concentrar naquilo que realmente importa: a compra em si.</p>
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Experiência do cliente aprimorada</span> combinando o melhor de ambos os mundos, o Checkout 3.1 proporciona uma jornada de compra suave, rápida e gratificante, deixando seus clientes satisfeitos e ansiosos para voltar.</p>
          <hr></hr>
          
       
      
      
          </div>
          )}

        
         

         {selected === 4 && (
             <div className="w-full gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Máxima personalização</h1>


 <p className="text-sm font-faktum mb-4 text-gray-800">A Yever possui o único checkout 100% customizável, mantenha a identidade visual da sua marca em todas as etapas da compra, fortalecendo o reconhecimento e a confiança do cliente.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">A Personalização Total  </span> não se trata apenas de estética, mas de uma conexão autêntica com os valores da sua marca. Ao ver a identidade da sua empresa manifestada em todos os detalhes do processo de compra, os clientes se sentem mais conectados e seguros em relação à sua escolha. Essa familiaridade cria um ambiente em que o cliente se sente em casa, confiante em cada etapa.</p>
         
          <hr></hr>
          
       
      
      
          </div>
          )}

         



{selected === 5 && (
             <div className="w-full gap-4 flex h-full text-start  flex-col">
          <h1 className="text-3xl font-faktum ">Infinity Stores & Infinity Checkout</h1>


 <p className="text-sm font-faktum mb-4 text-gray-800">A Yever apresenta a poderosa ferramenta Infinity, pronta para impulsionar suas conversões de vendas.</p>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Infinity Stores </span> descubra a liberdade absoluta ao construir um número infinito de lojas, todas gerenciadas através de uma única conta de usuário. Aqui na Yever, não conhecemos limites quando se trata de atender às suas ambições!</p>
         
          <hr></hr>
          <p className="text-sm font-faktum text-gray-800"><span className=" text-black font-bold">Infinity Checkout </span> imagine ter o poder de oferecer não apenas um, mas dois tipos de checkouts exclusivos: o padrão e o de remarketing. Com a Yever, isso se torna realidade. Você pode maximizar a conversão ao criar múltiplos checkouts e associá-los a produtos específicos ou promoções. Esta é a personalização sem limites que a Yever oferece para impulsionar suas vendas e otimizar a experiência do seu cliente.</p>
         
          <hr></hr>
          
       
      
      
          </div>
          )}

        
        </div>
      </div>

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
