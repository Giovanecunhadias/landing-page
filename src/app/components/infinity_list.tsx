import { useEffect, useRef } from "react";
import { Sparkle } from "lucide-react";
function InfinityList() {
  const logosRef = useRef(null);

  useEffect(() => {
    // Função que duplica a lista e ajusta atributos
    const ul = logosRef.current;
    if (ul) {
        ul.insertAdjacentHTML("afterend", ul.outerHTML);
        ul?.nextSibling?.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        ref={logosRef}
        className="flex font-faktum text-[#1f073b] text-5xl items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <p>Afiliados</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>ERP's</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>Coprodutores</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>Dropshipping</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>Recorrência</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>Negócios Digitais</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>Infoprodutores</p>
        </li>
        <Sparkle color="#d93d8d" fill="#d93d8d" size={40}/>
        <li>
          <p>SaaS</p>
        </li>
      </ul>
    </div>
  );
}

export default InfinityList;
