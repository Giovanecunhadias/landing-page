import React, { useEffect, useRef } from "react";
import { Sparkle } from 'lucide-react';

function InfinityList() {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      ul.parentNode?.appendChild(clone);
    }
  }, []);

  const items = [
    "Afiliados",
    "ERP's",
    "Coprodutores",
    "Dropshipping",
    "Recorrência",
    "Negócios Digitais",
    "Infoprodutores",
    "SaaS"
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4 sm:py-6 md:py-8">
      <ul
        ref={logosRef}
        className="flex font-faktum text-[#1f073b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <span className="whitespace-nowrap">{item}</span>
            </li>
            {index < items.length - 1 && (
              <Sparkle color="#d93d8d" fill="#d93d8d" size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default InfinityList;

