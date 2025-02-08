"use client";

import { useWindowWidth } from "@/hooks/usewidth";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeaderPhoneNotificationOne() {
  const { windowWidth } = useWindowWidth();

  return (
    <div className="lg:w-[21%] sm:w-2/6 w-5/6  md:w-[18%]  gap-3 inline-flex items-center bg-[#F1E1EF] py-2 pl-2 pr-4 rounded-[0.75rem] relative">
      <div className="min-w-[3.25rem] flex justify-center items-center min-h-[3.25rem]">
        <Image
          src={"/favicon.ico"}
          alt="Ícone de envelope"
          width={42}
          height={42}
        />
      </div>

      <div className="flex w-full flex-col text-[0.9375rem]">
        <b className="inline-flex  items-center justify-between font-faktumSemiBold text-brand-deep-warm">
          Botar a Casa!<span className="opacity-25 text-xs">1m atrás</span>
        </b>
        <p className="text-foreground opacity-70  md:hidden lg:block font-faktumMedium">
          Escala Fofo, Bota a casa que o ROI veio
        </p>
      </div>

      <div
        style={{
          right: windowWidth > 1000 ? "27.875rem" : `${windowWidth - 510}px`,
        }}
        className="absolute top-2/4 -translate-y-2/4 -z-10"
      >
        <div className="hidden lg:flex flex-col gap-[1.375rem] relative">
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex justify-center items-center w-[10.3125rem] h-[4.0625rem] rounded-xl z-10 py-1 px-4",
                {
                  "bg-[#fff]": item.id === 1,
                  "bg-[#01b169]": item.id === 2,
                  "bg-[#FFF]": item.id === 3,
                }
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}

          <div className="absolute -right-[12.1875rem] top-2/4 -translate-y-2/4">
            <svg
              width="200"
              height="200"
              viewBox="0 0 199 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-animation"
            >
              {/* Barra 1 */}
              <path
                d="M3 1H39C45.627 1 51 6.373 51 13V77C51 83.627 56.373 89 63 89H198.5"
                stroke="#fff"
                strokeWidth="2.01"
                className="line-1"
              />
              {/* Barra 2 */}
              <path
                d="M0 89H199"
                stroke="#01B169"
                strokeWidth="2.02"
                className="line-2"
              />
              {/* Barra 3 */}
              <path
                d="M3 177H39C45.627 177 51 171.627 51 165V101C51 94.373 56.373 89 63 89H198.5"
                stroke="#FFBC00"
                strokeWidth="2.01"
                className="line-3"
              />
            </svg>

           
            <div className="absolute top-[11px] left-0">
              {/* Bolinha 1 */}
              <div
                className="w-3 h-3 bg-[#fff] rounded-full absolute animate-bolinha1 opacity-70 shadow-bolinha"
                style={{ top: "-5px", left: "3px" }}
              ></div>

              {/* Bolinha 2 */}
              <div
                className="w-3 h-3 bg-[#01B169] rounded-full absolute animate-bolinha2 opacity-70 shadow-bolinha-green"
                style={{ top: "84px", left: "3px" }}
              ></div>

              {/* Bolinha 3 */}
              <div
                className="w-3 h-3 bg-[#FFBC00] rounded-full absolute animate-bolinha3 opacity-70 shadow-bolinha-yellow"
                style={{ top: "170px", left: "3px" }}
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
    icon: "/icons/utmify.png",
    alt: "Ícone de hotmart",
  },
  {
    id: 2,
    icon: "/icons/asaas.svg",
    alt: "Ícone de asaas",
  },
  {
    id: 3,
    icon: "/icons/stripe.svg",
    alt: "Ícone de stripe",
  },
];
