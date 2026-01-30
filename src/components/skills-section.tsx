import { BookOpen, Puzzle, Users, Zap } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      className="max-w-[1400px] mx-auto my-18.5 px-4 md:px-0"
      id="skills"
    >
      <h2 className="text-5xl mb-8">SOFT SKILLS</h2>

      <div className="grid text-center md:text-start md:grid-cols-2 gap-4 ">
        <div className="flex flex-col md:flex-row items-center gap-4 border border-[#737373] rounded-lg p-4 pt-10 md:p-10">
          <div className="flex items-center justify-center rounded-full size-40 bg-linear-to-r from-[#FA709A] to-[#FEE140] ">
            <div className="flex flex-col bg-black rounded-full size-28  text-center items-center justify-center">
              <span className=" text-2xl leading-none">
                <BookOpen size={80} />
              </span>
              <span className="font-poppins text-base leading-none"></span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl mb-2">Aprendizado Contínuo</h3>
            <p className="font-poppins">
              Capacidade de aprender novas tecnologias e ferramentas de forma
              constante, buscando evolução técnica e adaptação a novos desafios.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 border border-[#737373] rounded-lg p-4 pt-10 md:p-10">
          <div className="flex items-center justify-center rounded-full size-40 bg-linear-to-r from-[#FA709A] to-[#FEE140] ">
            <div className="flex flex-col bg-black rounded-full size-28  text-center items-center justify-center">
              <span className=" text-2xl leading-none"><Puzzle size={80} /></span>
              <span className="font-poppins text-base leading-none"></span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl mb-2">Resolução de Problemas</h3>
            <p className="font-poppins">
              Habilidade para analisar situações, identificar problemas e
              encontrar soluções práticas e eficientes no dia a dia.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 border border-[#737373] rounded-lg p-4 pt-10 md:p-10">
          <div className="flex items-center justify-center rounded-full size-40 bg-linear-to-r from-[#FA709A] to-[#FEE140] ">
            <div className="flex flex-col bg-black rounded-full size-28  text-center items-center justify-center">
              <span className=" text-2xl leading-none"><Users size={80} /></span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl mb-2">Trabalho em Equipe</h3>
            <p className="font-poppins">
              Facilidade para colaborar, respeitar diferentes opiniões e
              contribuir para objetivos em comum.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 border border-[#737373] rounded-lg p-4 pt-10 md:p-10">
          <div className="flex items-center justify-center rounded-full size-40 bg-linear-to-r from-[#FA709A] to-[#FEE140] ">
            <div className="flex flex-col bg-black rounded-full size-28  text-center items-center justify-center">
              <span className=" text-2xl leading-none"><Zap size={80} /></span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl mb-2">Proatividade</h3>
            <p className="font-poppins">
              Iniciativa para identificar oportunidades de melhoria e agir antes
              que problemas se tornem maiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
