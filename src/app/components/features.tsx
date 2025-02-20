import integreimage from "../assets/image/1.jpeg";
import configureimage from "../assets/image/3.png";
import automatizeimage from "../assets/image/2.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Features() {
  const [isIntegreView, setIntegreView] = useState(true);
  const [isConfigureView, setConfigureView] = useState(true);
  const [isAutomatizeView, setAutomatize] = useState(true);
  const integre = useRef<HTMLImageElement>(null);
  const configure = useRef<HTMLImageElement>(null);
  const automatize = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntegreView(entry.isIntersecting);
        if (entry.isIntersecting && integre.current) {
          observer.unobserve(integre.current);
        }
      },
      {
        root: null, // Visibilidade relativa à viewport
        rootMargin: "0px", // Sem margem adicional
        threshold: 0.1, // Considera visível se 10% da div estiver visível
      }
    );

    // Inicia a observação do header
    if (integre.current) {
      observer.observe(integre.current);
    }

    // Cleanup do observer quando o componente for desmontado
    return () => {
      if (integre.current) {
        observer.unobserve(integre.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setConfigureView(entry.isIntersecting);
        if (entry.isIntersecting && configure.current) {
          observer.unobserve(configure.current);
        }
      },
      {
        root: null, // Visibilidade relativa à viewport
        rootMargin: "0px", // Sem margem adicional
        threshold: 0.1, // Considera visível se 10% da div estiver visível
      }
    );
    if (configure.current) {
      observer.observe(configure.current);
    }
    return () => {
      if (configure.current) {
        observer.unobserve(configure.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAutomatize(entry.isIntersecting);
        if (entry.isIntersecting && automatize.current) {
          observer.unobserve(automatize.current);
        }
      },
      {
        root: null, // Visibilidade relativa à viewport
        rootMargin: "0px", // Sem margem adicional
        threshold: 0.1, // Considera visível se 10% da div estiver visível
      }
    );

    // Inicia a observação do header

    if (automatize.current) {
      observer.observe(automatize.current);
    }

    // Cleanup do observer quando o componente for desmontado
    return () => {
      if (automatize.current) {
        observer.unobserve(automatize.current);
      }
    };
  }, []);
  return (
    <>
      {/* INTEGRE */}
      <div className=" flex flex-col md:flex-row items-center py-10 lg:pb-[250px] lg:pt-[100px] gap-14  px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#01B169]/20 via-[#01B169]/10 to-white">
        <div className="md:w-1/2 flex flex-row justify-end">
          <Image
            ref={integre}
            src={integreimage}
            alt="Integre"
            className={`w-full max-w-[600px] h-auto  ${
              isIntegreView
                ? " animate-jump-in duration-[1ms] animate-delay-200"
                : "opacity-0"
            }`}
          />
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <div
            style={{ backgroundColor: "rgba(1, 177, 105, 0.1)" }}
            className="rounded-full w-24 text-center mb-4"
          >
            <span className="font-faktum text-[#02b16a] text-sm sm:text-base">
              INTEGRE
            </span>
          </div>
          <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Conecte <span className="text-[#01B169]">sua</span>
            <br />
            <span className="text-[#01B169]">plataforma</span>
            <br />
            de pagamento.
          </h2>
          <p className="font-faktum text-sm sm:text-md lg:text-lg mt-2">
            + de 30 integrações disponíveis.
          </p>
        </div>
      </div>

      {/* CONFIGURE */}
      <div className="flex flex-col md:flex-row items-center  py-10 lg:pb-[250px] lg:pt-[100px] gap-14  px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#d93d8d]/50 via-[#d93d8d]/10 to-white">
        <div className="md:w-1/2 flex flex-row justify-end">
          <Image
            ref={configure}
            src={configureimage}
            alt="Configure"
            className={`w-full max-w-[600px] h-auto ${
              isConfigureView ? "animate-jump-in" : "opacity-0"
            }`}
          />
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <div
            style={{ backgroundColor: "rgba(217, 61, 141, 0.1)" }}
            className="rounded-full w-24 text-center mb-4"
          >
            <span className="font-faktum text-[#d93d8d] text-sm sm:text-base">
              CONFIGURE
            </span>
          </div>
          <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            A Ameii entrega
            <br />
            as <span className="text-[#d93d8d]">suas vendas</span>
            <br />e emite as vendas.
          </h2>
          <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl ">
            Você escolhe: na cobrança, após o<br className="hidden sm:inline" />
            pagamento ou após a garantia.
          </p>
        </div>
      </div>

      {/* AUTOMATIZE */}
      <div className="flex flex-col md:flex-row items-center  py-10 lg:pb-[250px] lg:pt-[100px] gap-14  px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#5fc2ee]/50 via-[#5fc2ee]/10 to-white">
        <div className="md:w-1/2 flex flex-row justify-end">
          <Image
            src={automatizeimage}
            alt="Automatize"
            className={`w-full max-w-[600px] h-auto ${
              isAutomatizeView ? "animate-jump-in" : "opacity-0"
            }`}
            ref={automatize}
          />
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <div
            style={{ backgroundColor: "rgba(95, 194, 238, 0.1)" }}
            className="rounded-full w-24 text-center mb-4"
          >
            <span className="font-faktum text-[#5fc2ee] text-sm sm:text-base">
              AUTOMATIZE
            </span>
          </div>
          <h2 className="font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Enviamos a nota
            <br />
            para <span className="text-[#5fc2ee]">seu</span>
            <br />
            <span className="text-[#5fc2ee]">cliente</span> na hora!
          </h2>
          <p className="font-faktum text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
            Automaticamente e poupando seu
            <br className="hidden sm:inline" />
            valioso tempo!
          </p>
        </div>
      </div>
    </>
  );
}
