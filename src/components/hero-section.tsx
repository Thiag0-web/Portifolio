import { Button } from "./ui/button";
import Instagram from "@/assets/icons/instagram.png"
import Linkedlin from "@/assets/icons/linkedin.png";
import Whatsapp from "@/assets/icons/whatsapp.png";
import { CircleArrowDown } from "lucide-react";
import Star from "@/assets/img/Portal.png";
import ilustration from "@/assets/img/ilustration.png"

export function HeroSection() {
  return (
    <section className="flex max-w-[1400px] mx-auto items-stretch h-[calc(100vh-200px)] mb-18.5 px-4 md:px-0" id="home">
      <div className="flex-1 flex items-start my-auto">
        <div>
          <h1 className="text-center text-[50px] leading-[90%] md:w-96 md:text-[70px]">
            DESENVOLVEDOR FRONT-END
          </h1>
          <h2 className="text-[47px] mx-auto bg-linear-to-r from-blue-500 to-cyan-400 w-fit text-transparent bg-clip-text leading-[150%] md:text-[68px] ">
            THIAGO OLIVEIRA
          </h2>
          <div className="flex items-center justify-between mt-10 mb-6 [&>a>img]:size-8">
            <a href="https://www.instagram.com/thiag_o32/" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
            
            <a href="https://www.linkedin.com/in/thiago-oliveira-web/" target="_blank">
              <img src={Linkedlin} alt="" />
            </a>
            <a href="">
              <img src={Whatsapp} alt="" />
            </a>
          </div>
          <a
            href="https://docs.google.com/document/d/1l_X27WzSUsWhmDmTKyKVZFo3e63_2cLM/edit?usp=drive_link&ouid=111929615799736039051&rtpof=true&sd=true"
            target="_blank"
          >
            <Button className="w-full bg-[#292929] rounded-none font-poppins hover:bg-[#292929]/70">
              Download Curriculo <CircleArrowDown />
            </Button>
          </a>
        </div>
        <img className="hidden md:block" src={Star} />
      </div>
      <img className="flex-1  hidden md:block"  alt="" src={ilustration}/>
    </section>
  );
}
