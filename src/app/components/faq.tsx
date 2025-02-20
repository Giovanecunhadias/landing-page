"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "lucide-react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function Faq() {
  const [selected, setSelected] = React.useState(1);
  const FaqContent = () => {
    return (
      <>
        <div className="sticky top-8 py-4">
          <div
            style={{ backgroundColor: "rgba(95, 194, 238, 0.1)" }}
            className="rounded-full w-16 h-8 flex items-center justify-center mb-6"
          >
            <span className="font-faktum text-[#5fc2ee] text-sm">FAQ</span>
          </div>
          <h2 className="text-[#1f073b] text-3xl lg:text-5xl font-faktum mb-6 leading-tight">
            Ficou com
            <br />
            alguma dúvida?
          </h2>
          <p className="text-[#1f073b] font-faktum text-sm lg:text-base mb-8 max-w-md">
            Separamos algumas dúvidas comuns, mas caso essas não te ajudem,
            entre em contato com nosso time pelos canais de contato. Estamos
            prontos para te ajudar!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail size={24} strokeWidth={1} className="text-[#5fc2ee]" />
              <div>
                <p className="text-[#1f073b] font-faktum text-sm">
                  Dúvidas? Fale Conosco
                </p>
                <p className="text-[#1f073b] font-faktum font-bold text-sm">
                  contato@Ameii.com.br
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                className="text-[#5fc2ee]"
              />
              <div>
                <p className="text-[#1f073b] font-faktum text-sm">Whatsapp</p>
                <p className="text-[#1f073b] font-faktum text-sm">
                  Fale Conosco
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-4 lg:py-44 max-w-6xl pt-8 mt-9">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left column with FAQ content */}
        <div className="w-full lg:w-1/3">
          <FaqContent />
        </div>

        {/* Right column with accordion */}
        <div className="w-full lg:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" onClick={() => setSelected(1)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 1 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">01.</span>
                  <span className="text-start"> Quem pode contratar Ameii</span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 1 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                A Ameii é uma plataforma voltada para negócios digitais. Se você
                é infoprodutor, coprodutor, afiliado, ou se você tem um software
                (ERP / SaaS), A Ameii é para você.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" onClick={() => setSelected(2)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 2 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">02.</span>
                  <span className="text-start">
                    Vou ter um gerente de conta??{" "}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 2 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                Sim, você terá um Gerente de Conta dedicado na Ameii. Eles
                estarão à disposição para oferecer suporte personalizado,
                orientação estratégica e monitoramento proativo para garantir o
                sucesso contínuo da sua loja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" onClick={() => setSelected(3)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 3 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">03.</span>

                  <span className="text-start">
                    {" "}
                    Não possuo CNPJ, posso me inscrever?{" "}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 3 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                Sim! a Ameii é destinada a pessoas fisicas e pessoas juridicas,
                basta se cadastrar e começar a usar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" onClick={() => setSelected(4)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 4 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">04.</span>
                  <span className="text-start">
                    {" "}
                    Posso ter mais de um checkout por loja?{" "}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 4 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                Sim, na Ameii, você tem a flexibilidade de configurar vários
                checkouts para a mesma loja, permitindo que você adapte suas
                estratégias de venda de acordo com diferentes necessidades e
                públicos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" onClick={() => setSelected(5)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 5 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">05.</span>
                  <span className="text-start">
                    Posso ter mais de uma loja em uma conta?{" "}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 5 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                Sim, com nossa funcionalidade Infinity Stores, você consegue
                cadastrar quantas lojas desejar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" onClick={() => setSelected(6)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 6 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">06.</span>
                  <span className="text-start">
                    Posso integrar A Ameii com qualquer sistema via API?{" "}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 6 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                Sim, desde que você esteja utilizando um plano que ofereça o
                acesso a nossa API de integração. Para as plataformas que o
                Ameii possui integração nativa, você não precisará de acesso a
                API. Consulte a Documentação de Referência da API.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" onClick={() => setSelected(7)}>
              <AccordionTrigger
                className={`text-[#1f073b] ${
                  selected === 7 ? "bg-[#F5F6FA]" : " text-black"
                } rounded-t-xl px-8 font-faktum text-lg lg:text-xl`}
              >
                <span className="flex gap-2">
                  <span className="font-faktum text-[#d93d8d]">07.</span>
                  <span className="text-start">
                    {" "}
                    A Ameii cobra taxa de adesão?{" "}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={`text-[#1f073b] ${
                  selected === 7 ? "bg-[#F5F6FA] " : " text-black"
                } rounded-b-xl  font-faktum text-sm lg:text-md`}
              >
                Não cobramos taxa de adesão na sua primeira assinatura. A
                cobrança é sobre as vendas realizadas, planos são apenas para
                redução da tarifa sobre vendas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
