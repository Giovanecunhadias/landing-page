"use client";
import { Sparkle, Check, MoveRight, Undo2, X } from "lucide-react";
import Link from "next/link";

export default function Plans() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center mb-8">
        <div
          className="text-center rounded-full w-full max-w-xs px-4 py-2"
          style={{ backgroundColor: "rgba(217, 61, 141, 0.5)" }}
        >
          <span className="font-faktum text-[#d93d8d] text-sm md:text-base">
            PLANOS & PREÇOS
          </span>
        </div>
        <p className="text-[#1f073b] font-faktum text-2xl md:text-4xl text-center mt-4">
          Junte-se a Ameii e faça o seu negócio decolar!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PlanCard
          title="Topo de Funil"
          // originalPrice="948,00"
          price="Grátis"
          moth={true}
          notes="1.5%"
          downLabel="Ideal para quem está começando"
          // additionalNotePrice="0,58"
          features={[
            { text: "Taxa de adesão grátis", available: true },
            { text: "+ de 30 Integrações", available: true },
            { text: "Teste A/B", available: false },
            { text: "Retentativa Transparente", available: true },
            { text: "Suporte à Dropshipping", available: true },
            { text: "Fechamento mensal (auto)", available: true },

            {
              text: "Importação de vendas retroativas",
              available: true,
            },
            { text: "Suporte via WhatsApp, chat e e-mail", available: true },
            { text: "Acesso à API", available: false },
            { text: "Multi Gerenciamento", available: false },
            {
              text: "Atendimento prioritário com especialista",
              available: false,
            },
          ]}
        />

        <PlanCard
          title="Escala Fofo"
          originalPrice="147"
          price="99.99"
          notes="1.0%"
          downLabel="Ideal para quem fatura mais de R$30k por mês"
          // additionalNotePrice="0,38"
          features={[
            { text: "Taxa de adesão grátis", available: true },
            { text: "+ de 30 Integrações", available: true },
            { text: "Teste A/B", available: true },
            { text: "Retentativa Transparente", available: true },
            { text: "Suporte à Dropshipping", available: true },
            { text: "Fechamento mensal (auto)", available: true },
            {
              text: "Importação de vendas retroativas",
              available: true,
            },
            { text: "Suporte via WhatsApp, chat e e-mail", available: true },
            { text: "Acesso à API", available: true },
            { text: "Multi Gerenciamento", available: true },
            {
              text: "Atendimento prioritário com especialista",
              available: true,
            },
          ]}
          isMostSold={true}
        />

        <PlanCard
          title="Duplicando as campanhas"
          originalPrice="497"
          price="397.99"
          notes="0.75%"
          // additionalNotePrice="0,58"
          downLabel="Ideal para quem fatura mais de R$60k por mês"
          features={[
            { text: "Taxa de adesão grátis", available: true },
            { text: "+ de 30 Integrações", available: true },
            { text: "Teste A/B", available: true },
            { text: "Retentativa Transparente", available: true },
            { text: "Suporte à Dropshipping", available: true },
            { text: "Fechamento mensal (auto)", available: true },
            {
              text: "Importação de vendas retroativas",
              available: true,
            },
            { text: "Suporte via WhatsApp, chat e e-mail", available: true },
            { text: "Acesso à API", available: true },
            { text: "Multi Gerenciamento", available: true },
            {
              text: "Atendimento prioritário com especialista",
              available: true,
            },
          ]}
        />

        <PlanCard
          title="Bota a casa"
          price="Sob Consulta"
          downLabel="Ideal para quem fatura mais de R$120k por mês"
          notes="0.5%"
          // additionalNotePrice="Planos sob medida"
          features={[
            { text: "Taxa de adesão grátis", available: true },
            { text: "+ de 30 Integrações", available: true },
            { text: "Teste A/B", available: true },
            { text: "Retentativa Transparente", available: true },
            { text: "Suporte à Dropshipping", available: true },
            { text: "Fechamento mensal (auto)", available: true },
            {
              text: "Importação de vendas retroativas",
              available: true,
            },
            { text: "Suporte via WhatsApp, chat e e-mail", available: true },
            { text: "Acesso à API", available: true },
            { text: "Multi Gerenciamento", available: true },
            {
              text: "Atendimento prioritário com especialista",
              available: true,
            },
            { text: "Apoio técnico para integração", available: true },
          ]}
          isEnterprise={true}
        />
      </div>
    </div>
  );
}

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PlanCardProps {
  title: string;
  originalPrice?: string;
  price: string;
  notes: string;
  additionalNotePrice?: string;
  features: PlanFeature[];
  moth?: boolean;
  isMostSold?: boolean;
  isEnterprise?: boolean;
  downLabel?: string;
}

function PlanCard({
  title,
  originalPrice,
  price,
  notes,
  additionalNotePrice,
  features,
  moth,
  downLabel,
  isMostSold = false,
  isEnterprise = false,
}: PlanCardProps) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col h-full ${
        isEnterprise ? "border-2 border-[#0f0d0f] relative" : ""
      }${
        isMostSold ? "border-2 border-[#d93d8d] relative" : ""
      } hover:-translate-y-1 hover:scale-100 duration-300`}
    >
      {isMostSold && (
        <div className="bg-[#1f073b] text-white rounded-full text-center w-28 text-xs font-faktum mx-auto absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 py-1">
          MAIS VENDIDO
        </div>
      )}
      <div
        className={`text-center rounded-t-lg mb-4 ${
          isEnterprise ? "bg-[#0f0d0f] -mx-6 -mt-6 pt-6 pb-4 " : ""
        }${isMostSold ? "bg-[#d93d8d] -mx-6 -mt-6 pt-6 pb-4 " : ""}}`}
      >
        <p
          className={`text-center font-bold font-faktum flex items-center justify-center ${
            isEnterprise
              ? "text-white"
              : isMostSold
              ? "text-[#1f073b]"
              : "text-[#1f073b]"
          }`}
        >
          <Sparkle
            className={`${
              isEnterprise || isMostSold ? "fill-[#ffbc00]" : "fill-[#d93d8d]"
            }`}
            color={isEnterprise || isMostSold ? "#ffbc00" : "#d93d8d"}
          />
          PLANO
        </p>
        <p
          className={`font-faktum text-2xl md:text-3xl ${
            isEnterprise
              ? "text-white"
              : isMostSold
              ? "text-white"
              : "text-[#1f073b]"
          }`}
        >
          {title}
        </p>
      </div>
      {!isEnterprise && originalPrice && (
        <p className="line-through text-gray-500 text-center text-sm">
          R$ {originalPrice}
        </p>
      )}
      <p
        className={`${
          isEnterprise
            ? "text-gray-500 text-sm"
            : isMostSold
            ? "text-[#d93d8d]"
            : "text-[#1f073b]"
        } text-center font-faktum ${
          isEnterprise ? "" : "text-2xl md:text-3xl"
        } mb-2`}
      >
        {!moth
          ? isEnterprise
            ? price
            : `R$ ${price}`
          : isEnterprise
          ? price
          : `${price}`}
        {}
        {!isEnterprise && (
          <span className="text-sm"> {moth ? "" : "/mês"}</span>
        )}
      </p>
      <p
        className={`${
          isMostSold ? "text-[#d93d8d]" : "text-[#1f073b]"
        } font-bold font-faktum text-center text-sm mb-1`}
      >
        {notes}
      </p>
      <p className="text-gray-500 font-faktum text-center text-sm mb-4">
        {additionalNotePrice}
      </p>
      <div className="text-sm space-y-2 mb-4 flex-grow">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-[#1f073b]">
            {feature.available ? (
              <Check color="#02b16a" size={20} />
            ) : (
              <X color="#d93d8d" size={20} />
            )}
            <span
              className={`ml-2 ${feature.available ? "" : "text-gray-500"}`}
            >
              {feature.text}
            </span>
          </p>
        ))}
      </div>
      <div className="mt-auto">
      <Link href={"https://app.ameii.com.br/register"}>
        <button
          className={`w-full ${
            isEnterprise
              ? "bg-[#0f0d0f]"
              : isMostSold
              ? "bg-[#d93d8d]"
              : "border border-[#d93d8d]"
          } ${
            isEnterprise || isMostSold ? "text-white" : "text-[#d93d8d]"
          } py-2 px-4 rounded-xl flex items-center justify-center gap-2 font-faktum`}
        >
          {isEnterprise ? "Fale conosco" : "Começar"}{" "}
          {!isEnterprise && <MoveRight strokeWidth={1} />}
        </button>
        <p className="text-[#1f073b] flex items-center justify-center text-sm mt-2">
          <Undo2 size={16} strokeWidth={1} className="mr-1" /> {downLabel}
        </p>
      </Link>
      </div>
    </div>
  );
}
