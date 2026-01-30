import Undraw from "@/assets/img/undraw.svg"
import Vector from "@/assets/img/Vector.svg"
import Website from "@/assets/img/website.svg"

export function AboutSection() {
  return (
    <section
      className="max-w-[1400px] mx-auto mt-18.5 mb-60 px-4 md:px-0"
      id="about"
    >
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col order-1">
          <div className="flex items-center gap-6">
            <h3 className="uppercase mb-12.5 md:mb-0 text-5xl ">Sobre mim</h3>
            <div className="loader"></div>
          </div>
          <div className="flex-1 flex items-center">
            <p className="text-xl font-poppins font-bold md:w-4/5 ">
              Sobre mim sou{" "}
              <span className="bg-linear-to-r from-[#FA709A] to-[#FEE140] text-transparent bg-clip-text">
                Desenvolvedor Front-end
              </span>
              , com interesse em criar interfaces funcionais, bem estruturadas e
              visualmente agradáveis. Gosto de entender todo o processo de
              construção de um produto digital, desde a ideia até a entrega
              final, buscando sempre uma{" "}
              <span className="bg-linear-to-r from-[#FA709A] to-[#FEE140] text-transparent bg-clip-text">
                boa experiência para o usuário.
              </span>{" "}
            </p>
          </div>
        </div>
        <img
          src={Undraw}
          alt=""
          className="aspect-video w-full object-contain my-10 md:my-0 md:order-1 order-2"
        />
        <img
          src={Vector}
          alt=""
          className="aspect-video w-full object-contain my-10 md:my-0 md:order-1  order-4 "
        />
        <div className="flex items-center md:w-4/5 ml-auto md:order-1  order-3">
          <p className="text-xl font-poppins font-bold ">
            Sou movido por{" "}
            <span className="bg-linear-to-r from-[#84FAB0] to-[#8FD3F4] text-transparent bg-clip-text">
              aprendizado contínuo
            </span>
            e estou sempre estudando novas{" "}
            <span className="bg-linear-to-r from-[#84FAB0] to-[#8FD3F4] text-transparent bg-clip-text">
              tecnologias
            </span>{" "}
            e tendências do mercado para evoluir tecnicamente e entregar
            soluções cada vez melhores.
          </p>
        </div>
        <div className="flex items-center md:w-4/5 mr-auto md:order-1 order-5">
          <p className="text-xl font-poppins font-bold ">
            Meu nome é{" "}
            <span className="bg-linear-to-r from-[#E0C3FC] to-[#59a6f3] text-transparent bg-clip-text">
              Thiago Oliveira da Rocha
            </span>{" "}
            sou{" "}
            <span className="bg-linear-to-r from-[#07bb07]  via-[#f8ff2f]  to-[#0400ff]  text-transparent bg-clip-text">
              Brasileiro
            </span>{" "}
            e acredito que tecnologia é uma ferramenta poderosa para ajudar
            pessoas, resolver problemas reais e gerar impacto positivo.
          </p>
        </div>
        <img
          src={Website}
          alt=""
          className="aspect-video w-full object-contain mt-10 md:mt-0 md:order-1 order-6"
        />
      </div>
    </section>
  );
}
