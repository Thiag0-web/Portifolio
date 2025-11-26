import Logo from "@/assets/img/Logo.png";
import Ilusstracao from "@/assets/img/ilustracao.png";
import Detalhe from "@/assets/img/detalhe.svg";

export function Footer() {
  return (
    <footer className="bg-[#292929] relative">
      <div className="max-w-[1400px] mx-auto bg-[#A87FF3] rounded-2xl p-6 font-poppins absolute left-4 right-4 md:left-0 md:right-0 -translate-y-1/2 py-10 ">
        <img
          className="absolute -left-4 bottom-0 w-32 md:w-48 z-1 hidden min-[425px]:block"
          src={Ilusstracao}
          alt="Ilustração"
        />
        <img src={Detalhe} alt="Detalhe"  className="absolute top-0 right-0 w-20"/>
        <img src={Detalhe} alt="Detalhe"  className="absolute bottom-0 left-0 w-20 rotate-180 "/>

        <h4 className="min-[425px]:ml-24 md:ml-52 ">Thanks for visit my website</h4>
        <p className="min-[425px]:ml-24 md:ml-52 text-sm">
          If you have any questions you can write me to any of my social
          networks, I am sure I will answer you.
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto pb-7 pt-32 md:pt-24 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-0">
        <img src={Logo} className="w-20 " />
        <nav>
          <ul className="flex items-center gap-5 md:gap-7.5 font-poppins">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="py-4" />
    </footer>
  );
}
