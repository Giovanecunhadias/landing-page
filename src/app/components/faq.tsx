"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from 'lucide-react';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-8">
      {/* Primeira Div */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <div className="flex flex-col items-start">
          <div>
            <div
              style={{ backgroundColor: "rgba(95, 194, 238, 0.5)" }}
              className="rounded-full w-12 text-center mb-4"
            >
              <span className="font-faktum text-[#5fc2ee] text-sm">FAQ</span>
            </div>
            <h2 className="text-[#1f073b] text-3xl lg:text-5xl font-faktum mb-4">
              Ficou com<br />alguma dúvida?
            </h2>
            <p className="text-[#1f073b] font-faktum text-sm lg:text-md mb-6">
              Separamos algumas dúvidas comuns, mas caso 
              essas não te ajudem, entre em contato com 
              nosso time pelos canais de contato. Estamos 
              prontos para te ajudar!
            </p>

            <div className="flex items-center space-x-4 mb-4">
              <Mail size={24} strokeWidth={1} color="#5fc2ee" />
              <div>
                <p className="text-[#1f073b] font-faktum text-sm">
                  Dúvidas? Fale Conosco
                </p>
                <p className="text-[#1f073b] font-faktum font-bold text-sm">
                  contato@spedy.com.br
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#5fc2ee" />
              <div>
                <p className="text-[#1f073b] font-faktum text-sm">Whatsapp</p>
                <p className="text-[#1f073b] font-faktum text-sm">
                  Fale Conosco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*PERGUNTAS FREQUENTES */}
      {/*USANDO SHADCN UI COMPONENTE ACCORDION */}
      <div className="w-full lg:w-2/3">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span>
                <span className="font-faktum text-[#d93d8d]">01.</span> Quem pode contratar Ameii
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              O Spedy é uma plataforma voltada para negócios digitais. Se você é infoprodutor, coprodutor, afiliado, ou se você tem um software (ERP / SaaS), o Spedy é para você.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span>
                <span className="font-faktum text-[#d93d8d]">02.</span> Quais são os tipos de notas que o Ameii emite ?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              O Spedy é uma plataforma voltada para negócios digitais. Se você é infoprodutor, coprodutor, afiliado, ou se você tem um software (ERP / SaaS), o Spedy é para você.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span>
                <span className="font-faktum text-[#d93d8d]">03.</span> O que eu preciso para emitir notas fiscais?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              Para notas fiscais de produtos digitais (NFS-e) a empresa deve estar devidamente inscrita no município na qual serão feitas as emissões. Se você emite nota para produtos físicos (NF-e, modelo 55) é necessário possuir Inscrição Estadual junto a SEFAZ do seu Estado. Além disso, o certificado digital modelo A1 é requerido para a automação das emissões de NF-e em todos os estados da federação e NFS-e em muitos municípios. Consulte nosso time para saber mais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span>
                <span className="font-faktum text-[#d93d8d]">04.</span> Quais cidades são atendidas pelo Ameii?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              Atendemos centenas de cidades em todo Brasil. Veja a lista completa aqui. Se sua cidade não estiver na lista, fale conosco. Temos um time extremamente ágil para atender sua cidade.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span> 
                <span className="font-faktum text-[#d93d8d]">05.</span> Posso integrar o Ameii com qualquer sistema via API?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              Sim, desde que você esteja utilizando um plano que ofereça o acesso a nossa API de integração. Para as plataformas que o Spedy possui integração nativa, você não precisará de acesso a API. Consulte a Documentação de Referência da API.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span>
                <span className="font-faktum text-[#d93d8d]">06.</span> O Ameii cobra taxa de adesão?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              Não cobramos taxa de adesão na sua primeira assinatura. Caso decida cancelar o plano e retornar no futuro você perde esse benefício.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-[#1f073b] font-faktum text-lg lg:text-xl">
              <span>
                <span className="font-faktum text-[#d93d8d]">07.</span> Como funciona a garantia de satisfação?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#1f073b] font-faktum text-sm lg:text-md">
              Se dentro dos primeiros 30 dias você não ficar satisfeito com a nossa solução, basta entrar em contato solicitando o reembolso que devolveremos 100% do seu investimento.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

