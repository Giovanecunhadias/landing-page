import Image from "next/image";
import { Rating } from "primereact/rating";
import firstprofile from "@/app/assets/profiles/first_profile.png";
import secondprofile from "@/app/assets/profiles/second_profile.png";
import thirdprofile from "@/app/assets/profiles/third_profile.png";
export default function Ratings() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center text-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
        <div
          style={{ backgroundColor: "rgba(217, 61, 141, 0.5)" }}
          className="rounded-full w-auto text-center px-4 py-1"
        >
          <span className="font-faktum text-[#d93d8d] text-sm sm:text-base">
            DEPOIMENTOS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-faktum mt-2 mb-12">
          + de 6 milhões de vendas realizadas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 py-4 lg:py-24 gap-6 w-full lg:max-w-7xl relative ">
          {[
            {
              name: "Leonardo Fittipaldi",
              role: "Infoprodutor",
              image: firstprofile,
              testimonial:
                "Ameii foi a escolha certa. Atendimento impecável, consultor educado, nos ajudou a configurar e tirar dúvidas. Plataforma de fácil usabilidade e preço super justo. Super recomendo, tem agilizado muito nosso trabalho.",
            },
            {
              name: "Ronsimar Rigoni",
              role: "Coprodutor",
              image: secondprofile,
              testimonial:
                "Ameii simplificou minha vida, não preciso emitir vendas manualmente. Integração e split automáticos, cálculos corretos de coprodução. Suporte atende prontamente. Feliz com Ameii, tirei um peso das costas.",
            },
            {
              name: "Dr. Douglas Garcia",
              role: "Fisioterapeuta e Infoprodutor",
              image: thirdprofile,
              testimonial:
                "Feliz com Ameii. Emitir vendas manualmente era desafiador e demorado. Com um clique, vendas de infoprodutos viram vendas, otimizando tempo e mantendo contabilidade em dia. Suporte rápido e atencioso.",
            },
          ].map((profile, index) => (
            <div
              key={index}
              className={`absolute z-10 lg:w-[30%] w-full shadow-xl   bg-white rounded-xl bottom-[-200px] p-6  hover:-translate-y-1 hover:scale-100 duration-300 ${
                index === 0
                  ? "left-0"
                  : index === 1
                  ? "left-1/2 -translate-x-1/2"
                  : "right-0"
              }`}
            >
              <Rating
                value={5}
                className="space-x-2 mb-4"
                cancel={false}
                style={{ color: "#ffbc00" }}
              />
              <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg mb-4">
                {profile.testimonial}
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src={profile.image}
                  alt={`${profile.name} profile image`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[#1f073b] font-faktum text-sm sm:text-base lg:text-lg font-bold">
                    {profile.name}
                  </p>
                  <p className="text-[#1f073b] font-faktum text-xs sm:text-sm">
                    {profile.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
