import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export default function Rodape() {
  const pClasses =
    "text-[#1f073b] hover:underline underline-offset-2 text-lg font-faktum font-bold";
  const titleClasses = "text-gray-400 font-faktum mb-4 font-bold";
  return (
    <>
      <footer className="container mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-4 justify-center flex flex-col text-center items-center">
            <Image
              src="/favicon.ico"
              alt="Ameii"
              width={150}
              height={50}
              className="mb-6"
            />
            <p className="text-gray-500 justify-center mb-6 text-sm leading-relaxed">
              Minimizamos o trabalho operacional do seu negócio, conectando na
              sua plataforma de pagamento e emitindo as vendas fiscais
              automaticamente.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                className="text-pink-500 hover:text-pink-600"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-700"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-red-600 hover:text-red-700"
              >
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* O Ameii Section */}
              <div className="flex flex-col gap-2">
                <h2 className={titleClasses}>O AMEII</h2>
                <nav className="flex flex-col gap-2">
                  <Link href="/" className={pClasses}>
                    Início
                  </Link>
                  <Link href="/" className={pClasses}>
                    Como funciona
                  </Link>
                  <Link href="/" className={pClasses}>
                    Integrações
                  </Link>
                  <Link href="/" className={pClasses}>
                    Recursos
                  </Link>
                  <Link href="/" className={pClasses}>
                    Planos e Preços
                  </Link>
                  <Link href="/" className={pClasses}>
                    Depoimentos
                  </Link>
                  <Link
                    href="/"
                    className="text-[#5fc2ee] hover:underline underline-offset-2 inline-flex items-center font-sm font-bold font-faktum"
                  >
                    Entrar <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/"
                    className="text-[#d93d8d] hover:underline underline-offset-2 inline-flex items-center font-sm font-bold font-faktum"
                  >
                    Comece agora <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </nav>
              </div>

              {/* SUPORTE Section */}
              <div className="flex flex-col gap-2">
                <h2 className={titleClasses}>SUPORTE</h2>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className={pClasses}>
                    Central de Ajuda
                  </Link>
                  <Link href="/" className={pClasses}>
                    Programa de Parcerias
                  </Link>
                  <Link href="/" className={pClasses}>
                    Documentação da API
                  </Link>
                </nav>

                <h2 className={titleClasses}>POLÍTICAS</h2>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className={pClasses}>
                    Termos de Uso
                  </Link>
                  <Link href="/" className={pClasses}>
                    Políticas de Privacidade
                  </Link>
                  <Link href="/" className={pClasses}>
                    Políticas de Cookies
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              2024 © Todos os direitos reservados
            </p>
            <p className="text-gray-500 text-sm mt-4 sm:mt-0">
              AMEII DESENVOLVIMENTO DE SOFTWARE LTDA CNPJ nº. 47.332.178/0001-01
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
