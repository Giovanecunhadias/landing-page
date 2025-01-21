"use client";

import { useWindowWidth } from "@/hooks/usewidth";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeaderPhoneNotificationTwo() {
  const { windowWidth } = useWindowWidth();

  return (
    <div className="w-[25%] gap-3 inline-flex items-center bg-[#F1E1EF] py-2 pl-2 pr-4 rounded-[0.75rem] relative">
      <div className="min-w-[3.25rem] min-h-[3.25rem]">
        <Image
          src={"/favicon.ico"}
          alt="Ícone de envelope"
          width={42}
          height={42}
        />
      </div>
      <div className="flex w-full flex-col text-[0.9375rem]">
        <b className="inline-flex items-center justify-between font-faktumSemiBold text-brand-deep-warm">
          Falaaa Calabrezo <span className="opacity-25 text-xs">1m atrás</span>
        </b>
        <p className="text-foreground opacity-70 font-faktumMedium">
          Saiu mais uma vendinha!
        </p>
      </div>

      <div
        style={{
          left: windowWidth > 1000 ? "30.75rem" : `${windowWidth - 510}px`,
        }}
        className="absolute top-2/4 -translate-y-2/4 left-[30.75rem] -z-10"
      >
        <div className="hidden lg:flex flex-col gap-[1.375rem] relative">
          {items.map((item) => (
            <div
              className={cn(
                "flex justify-center items-center w-[10.3125rem] h-[4.0625rem] rounded-xl z-10 py-1 px-4",
                {
                  "bg-[#e0f7b6]": item.id === 1,
                  "bg-[#fff]": item.id === 2,
                  "bg-[#d93d8d]": item.id === 3,
                }
              )}
              key={item.id}
            >
              <div className="relative w-full h-full flex justify-center items-center">
                {item.id === 3 ? (
                  <span className="font-faktumMedium text-4xl text-brand-neutral-white">
                    {item.label}
                  </span>
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>
          ))}

          <div className="absolute -left-[12.0625rem] top-2/4 -translate-y-2/4">
            <svg
              width="201"
              height="178"
              viewBox="0 0 201 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-animation"
            >
              {/* Linha 1 */}
              <path
                d="M195.5 1H159.5C152.873 1 147.5 6.373 147.5 13V77C147.5 83.627 142.127 89 135.5 89H0"
                stroke="#95BF47"
                strokeWidth="2.01"
                className="line-1"
              />
              {/* Linha 2 */}
              <path
                d="M200.971 89H0"
                stroke="#282FE3"
                strokeWidth="2"
                className="line-2"
              />
              {/* Linha 3 */}
              <path
                d="M195.5 177H159.5C152.873 177 147.5 171.627 147.5 165V101C147.5 94.373 142.127 89 135.5 89H0"
                stroke="#D93D8D"
                strokeWidth="2.01"
                className="line-3"
              />
            </svg>

            <div className="absolute inset-0">
              {/* Bolinha 1 */}
              <div
                className="w-3 h-3 bg-[#95BF47] rounded-full absolute animate-bolinha-right-1 opacity-70 shadow-bolinha-green2"
                style={{ top: "-5px", right: "5px" }}
              ></div>

              {/* Bolinha 2 */}
              <div
                className="w-3 h-3 bg-[#282FE3] rounded-full absolute animate-bolinha-right-2 opacity-70 shadow-bolinha-blue"
                style={{ top: "84px", right: "5px" }}
              ></div>

              {/* Bolinha 3 */}
              <div
                className="w-3 h-3 bg-[#D93D8D] rounded-full absolute animate-bolinha-right-3 opacity-70 shadow-bolinha-pink"
                style={{ top: "170px", right: "5px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    id: 1,
    icon: "/icons/shopify.svg",
    alt: "Ícone de shopify",
    label: null,
  },
  {
    id: 2,
    icon: "/icons/woocommerce.webp",
    alt: "Ícone de kiwify",
    label: null,
  },
  {
    id: 3,
    icon: "/icons",
    alt: "Ícone de hotmart",
    label: "+ 30",
  },
];
