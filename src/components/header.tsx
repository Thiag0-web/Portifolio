import Logo from "@/assets/img/Logo.png";
import { Menu } from "./menu";


export function Header() {
  return (
    <header className="max-w-[1400px] mx-auto flex justify-between items-center h-16 mb-10 md:mb-15 bg-[#0B0B0B] md:bg-transparent px-4 md:px-0">
      <img src={Logo}/>
      <nav className="hidden md:block ">
        <ul className="flex items-center gap-7.5 font-poppins ">
          <li>
            <a 
            className="hover:underline"
            href="#home">Inicio</a>
          </li>
          <li>
            <a 
            className="hover:underline"
            href="#portfolio">Projetos</a>
          </li>
          <li>
            <a 
            className="hover:underline"
            href="#skills">Softskills</a>
          </li>
          <li>
            <a 
            className="hover:underline"
            href="#about">Sobre mim</a>
          </li>
        </ul>
      </nav>

     

      <Menu/>

    </header>
  );
}
