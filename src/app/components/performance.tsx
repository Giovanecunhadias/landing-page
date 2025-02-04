import { CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Performance() {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageReftwo = useRef<HTMLImageElement>(null);
  const imageRefthree = useRef<HTMLImageElement>(null);
  const imageReffour = useRef<HTMLImageElement>(null);
  const imageReffive = useRef<HTMLImageElement>(null);
  const imageRefsix = useRef<HTMLImageElement>(null);
  const imageRefseven = useRef<HTMLImageElement>(null);
  const coproductors = useRef<HTMLImageElement>(null);
  const text = useRef<HTMLParagraphElement>(null);
  const text2 = useRef<HTMLParagraphElement>(null);
  const text3 = useRef<HTMLParagraphElement>(null);
  const text4 = useRef<HTMLParagraphElement>(null);
  const text5 = useRef<HTMLParagraphElement>(null);
  const text6 = useRef<HTMLParagraphElement>(null);
  const text7 = useRef<HTMLParagraphElement>(null);
  const text8 = useRef<HTMLParagraphElement>(null);
  const text9 = useRef<HTMLParagraphElement>(null);
  const text10 = useRef<HTMLParagraphElement>(null);
  const text11 = useRef<HTMLParagraphElement>(null);
  const text12 = useRef<HTMLParagraphElement>(null);
  const text13 = useRef<HTMLParagraphElement>(null);
  const text14 = useRef<HTMLParagraphElement>(null);
  const text15 = useRef<HTMLParagraphElement>(null);
  const text16 = useRef<HTMLParagraphElement>(null);
  const text17 = useRef<HTMLParagraphElement>(null);
  const text18 = useRef<HTMLParagraphElement>(null);
  const text19 = useRef<HTMLParagraphElement>(null);
  const [isCoproductorsInView, setCoproductorsInView] = useState(true);
  const [isImageInView, setImageIsInView] = useState(true);
  const [isImageInViewtwo, setImageIsInViewtwo] = useState(true);
  const [isImageInViewthree, setImageIsInViewthree] = useState(true);
  const [isImageInViewfour, setImageIsInViewfour] = useState(true);
  const [isImageInViewfive, setImageIsInViewfive] = useState(true);
  const [isImageInViewsix, setImageIsInViewsix] = useState(true);
  const [isImageInViewseven, setImageIsInViewseven] = useState(true);
  const [p, setp] = useState(true);
  const [p2, setp2] = useState(true);
  const [p3, setp3] = useState(true);
  const [p4, setp4] = useState(true);
  const [p5, setp5] = useState(true);
  const [p6, setp6] = useState(true);
  const [p7, setp7] = useState(true);
  const [p8, setp8] = useState(true);
  const [p9, setp9] = useState(true);
  const [p10, setp10] = useState(true);
  const [p11, setp11] = useState(true);
  const [p12, setp12] = useState(true);
  const [p13, setp13] = useState(true);
  const [p14, setp14] = useState(true);
  const [p15, setp15] = useState(true);
  const [p16, setp16] = useState(true);
  const [p17, setp17] = useState(true);
  const [p18, setp18] = useState(true);
  const [p19, setp19] = useState(true);
  const viewPort = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        // Atualizando os estados para refletir se os elementos estão em vista
        setImageIsInView(isIntersecting);
        setImageIsInViewtwo(isIntersecting);
        setImageIsInViewthree(isIntersecting);
        setImageIsInViewfour(isIntersecting);
        setImageIsInViewfive(isIntersecting);
        setImageIsInViewsix(isIntersecting);
        setImageIsInViewseven(isIntersecting);
        setCoproductorsInView(isIntersecting);
        setp(isIntersecting);
        setp2(isIntersecting);
        setp3(isIntersecting);
        setp4(isIntersecting);
        setp5(isIntersecting);
        setp6(isIntersecting);
        setp7(isIntersecting);
        setp8(isIntersecting);
        setp9(isIntersecting);
        setp10(isIntersecting);
        setp11(isIntersecting);
        setp12(isIntersecting);
        setp13(isIntersecting);
        setp14(isIntersecting);
        setp15(isIntersecting);
        setp16(isIntersecting);
        setp17(isIntersecting);
        setp18(isIntersecting);
        setp19(isIntersecting);
      },
      {
        root: viewPort.current, // Visibilidade relativa à viewport
        rootMargin: "0px", // Sem margem adicional
        threshold: 0.5, // Considera visível se 10% da div estiver visível
      }
    );

    // Observando os elementos de imagem
    if (imageRef.current) observer.observe(imageRef.current);
    if (imageReftwo.current) observer.observe(imageReftwo.current);
    if (imageRefthree.current) observer.observe(imageRefthree.current);
    if (imageReffour.current) observer.observe(imageReffour.current);
    if (imageReffive.current) observer.observe(imageReffive.current);
    if (imageRefsix.current) observer.observe(imageRefsix.current);
    if (imageRefseven.current) observer.observe(imageRefseven.current);

    // Observando os elementos de texto
    if (text.current) observer.observe(text.current);
    if (text2.current) observer.observe(text2.current);
    if (text3.current) observer.observe(text3.current);
    if (text4.current) observer.observe(text4.current);
    if (text5.current) observer.observe(text5.current);
    if (text6.current) observer.observe(text6.current);
    if (text7.current) observer.observe(text7.current);
    if (text8.current) observer.observe(text8.current);
    if (text9.current) observer.observe(text9.current);
    if (text10.current) observer.observe(text10.current);
    if (text11.current) observer.observe(text11.current);
    if (text12.current) observer.observe(text12.current);
    if (text13.current) observer.observe(text13.current);
    if (text14.current) observer.observe(text14.current);
    if (text15.current) observer.observe(text15.current);
    if (text16.current) observer.observe(text16.current);
    if (text17.current) observer.observe(text17.current);
    if (text18.current) observer.observe(text18.current);
    if (text19.current) observer.observe(text19.current);

    // Observando coprodutores
    if (coproductors.current) observer.observe(coproductors.current);

    // Cleanup para desobservar os elementos quando o componente for desmontado
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (imageReftwo.current) observer.unobserve(imageReftwo.current);
      if (imageRefthree.current) observer.unobserve(imageRefthree.current);
      if (imageReffour.current) observer.unobserve(imageReffour.current);
      if (imageReffive.current) observer.unobserve(imageReffive.current);
      if (imageRefsix.current) observer.unobserve(imageRefsix.current);
      if (imageRefseven.current) observer.unobserve(imageRefseven.current);

      if (text.current) observer.unobserve(text.current);
      if (text2.current) observer.unobserve(text2.current);
      if (text3.current) observer.unobserve(text3.current);
      if (text4.current) observer.unobserve(text4.current);
      if (text5.current) observer.unobserve(text5.current);
      if (text6.current) observer.unobserve(text6.current);
      if (text7.current) observer.unobserve(text7.current);
      if (text8.current) observer.unobserve(text8.current);
      if (text9.current) observer.unobserve(text9.current);
      if (text10.current) observer.unobserve(text10.current);
      if (text11.current) observer.unobserve(text11.current);
      if (text12.current) observer.unobserve(text12.current);
      if (text13.current) observer.unobserve(text13.current);
      if (text14.current) observer.unobserve(text14.current);
      if (text15.current) observer.unobserve(text15.current);
      if (text16.current) observer.unobserve(text16.current);
      if (text17.current) observer.unobserve(text17.current);
      if (text18.current) observer.unobserve(text18.current);
      if (text19.current) observer.unobserve(text19.current);

      if (coproductors.current) observer.unobserve(coproductors.current);
    };
  }, []);

  const profileClasses = `w-12 h-12 rounded-full object-cover border-2 border-white ${
    isCoproductorsInView ? "animate-fade-in" : "opacity-0"
  }`;
  const p1Classes = ``;
  const p2Classes = ``;
  const p3Classes = ``;
  const p4Classes = ``;
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center px-4 sm:px-6 lg:px-8 mt-20">
      <div className="rounded-full bg-[#5fc2ee]/20 w-30 text-center">
        <span className="font-faktum text-[#5fc2ee] text-sm p-2 sm:text-base">
          PERFORMANCE
        </span>
      </div>
      <h2
        className={`font-faktum text-2xl sm:text-3xl md:text-4xl lg:text-5xl `}
      >
        Tecnologia para{" "}
        <span className="text-[#5fc2ee]">economizar o seu tempo</span>
      </h2>
      <div
        ref={viewPort}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/*DASHBOARD EM TEMPO REAL */}
        <div className="text-left space-y-4">
          <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
            <p
              ref={text}
              className={`font-faktum text-2xl sm:text-3xl text-[#1f073b]' ${
                p ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Dashboard
            </p>
            <p
              ref={text2}
              className={`font-faktum text-2xl sm:text-3xl text-[#1f073b]' ${
                p2 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              em tempo real.
            </p>
            <Image
              ref={imageRef}
              className={`${isImageInView ? "animate-fade-in" : "opacity-0"}`}
              src="/performance1.png"
              alt="dashboard"
              width={200}
              height={200}
            />
          </div>
          <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
            <Image
              ref={imageReftwo}
              className={`${
                isImageInViewtwo ? "animate-fade-in" : "opacity-0"
              }`}
              src="years.svg"
              width={200}
              height={200}
              alt="icon"
            />
            <p
              ref={text3}
              className={`font-faktum font-bold text-[#1f073b] ${
                p3 ? "aniamte-fade-in" : "opacity-0"
              }`}
            >
              Importe suas
            </p>
            <p
              ref={text4}
              className={`font-faktum font-bold text-[#1f073b] ${
                p4 ? "aniamte-fade-in" : "opacity-0"
              }`}
            >
              vendas antigas.
            </p>
            <Image
              ref={imageRefthree}
              className={`${
                isImageInViewthree ? "animate-fade-in" : "opacity-0"
              }`}
              src="/performance3.png"
              width={200}
              height={200}
              alt="icon"
            />
          </div>
        </div>

        <div className="text-left space-y-4">
          <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
            <p
              ref={text5}
              className={`font-faktum text-xl sm:text-2xl text-[#1f073b] ${
                p5 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Fechamento
            </p>
            <p
              ref={text6}
              className={`font-faktum text-xl sm:text-2xl text-[#1f073b] ${
                p6 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              mensal em dia.
            </p>

            <Image
              src="fechamento_mensal.svg"
              ref={imageReffour}
              className={`${
                isImageInViewfour ? "animate-fade-in" : "opacity-0"
              }`}
              width={250}
              height={250}
              alt="icon"
            />

            <p
              ref={text7}
              className={`font-faktum text-lg sm:text-xl text-[#1f073b]${
                p7 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Sem precisar Solicitar
            </p>
            <p
              ref={text8}
              className={`font-faktum text-lg sm:text-xl text-[#1f073b]${
                p8 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Relatiorio Automatico
            </p>
          </div>
          <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
            <Image
              ref={imageReffive}
              className={`${
                isImageInViewfive ? "animate-fade-in" : "opacity-0"
              }`}
              src="suporte_operacao_dp.svg"
              alt="operação"
              width={100}
              height={100}
            />
            <p
              ref={text10}
              className={`font-faktum text-lg sm:text-xl text-[#1f073b] mt-4 ${
                p10 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Suporte total para
            </p>
            <p
              ref={text11}
              className={`font-faktum text-lg sm:text-xl text-[#1f073b]  ${
                p11 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              sua operação de
            </p>
            <p
              ref={text12}
              className={`font-faktum text-[#d93d8d] text-3xl sm:text-4xl ${
                p12 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Dropshipping
            </p>
          </div>

          <div className="bg-white rounded-xl border-2 p-4 flex px-6 flex-row items-center">
            <Image
              src={"checks.svg"}
              alt="checks icons"
              className="lg:ml-4"
              width={50}
              height={50}
            />
            <div className="flex flex-col ">
              <p
                ref={text13}
                className={`font-faktum lg:text-2xl text-xl text-[#d93d8d] flex items-center ${
                  p13 ? "animate-fade-in" : "opacity-0"
                }`}
              >
                Cancelamento ou devolução automática:
              </p>

              <p
                ref={text14}
                className={`font-faktum lg:text-2xl text-xl text-[#1f073b] flex items-center${
                  p14 ? "animate-fade-in" : "opacity-0"
                }`}
              >
                Quando uma venda é reembolsada a Ameii Cancela!
              </p>
            </div>
          </div>
        </div>
        <div className="text-left space-y-4">
          <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center relative">
            <p
              ref={text17}
              className={`font-faktum text-2xl sm:text-3xl text-[#1f073b]${
                p17 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Divisão entre{" "}
            </p>
            <p
              ref={text18}
              className={`font-faktum text-2xl sm:text-3xl text-[#1f073b]${
                p18 ? "animate-fade-in" : "opacity-0"
              }`}
            >
              coprodutores.
            </p>

            <div className="relative w-[300px] h-[200px] my-4">
              {/* SVG da divisão */}
              <Image
                ref={imageRefsix}
                className={`${
                  isImageInViewsix ? "animate-fade-in mx-auto" : "opacity-0"
                }`}
                src="/performance2.png"
                alt="icon"
                width={100}
                height={100}
              />

              {/* Foto do coprodutor 1 - esquerda */}
              <div className="absolute left-20 bottom-0">
                <img
                  ref={coproductors}
                  src="https://framerusercontent.com/images/UUzCrpytoCj3VdSEkdlYSns86U.png"
                  alt="Coprodutor 1"
                  className={profileClasses}
                />
              </div>

              {/* Foto do coprodutor 2 - direita */}
              <div className="absolute right-20 bottom-0">
                <img
                  ref={coproductors}
                  src="https://framerusercontent.com/images/LCpfHb5KZMbMEqxj5CVnuj99EaA.png"
                  alt="Coprodutor 2"
                  className={profileClasses}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border-2 p-4 flex flex-col items-center">
            <Image
              src="split.svg"
              ref={imageRefseven}
              className={`${
                isImageInViewseven ? "animate-fade-in" : "opacity-0"
              }`}
              alt="icon"
              width={100}
              height={100}
            />
            <p
              ref={text19}
              className={`font-faktum text-2xl sm:text-3xl text-[#1f073b] ${
                p19 ? "animate-fade-in" : "opacity-19"
              }`}
            >
              Split de suas vendas.
            </p>
          </div>
        </div>
      </div>
      {/*FALTANDO IMAGENS */}
    </div>
  );
}
