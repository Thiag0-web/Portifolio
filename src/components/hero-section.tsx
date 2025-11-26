import { Button } from "./ui/button";
import Instagram from "@/assets/icons/instagram_icon.svg";
import Figma from "@/assets/icons/figma_icon.svg";
import Linkedlin from "@/assets/icons/linkedlin_icon.svg";
import Twitter from "@/assets/icons/twitter_icon.svg";
import Telegram from "@/assets/icons/telegram-icon.svg";
import Medium from "@/assets/icons/medium_icon.svg";
import { CircleArrowDown } from "lucide-react";
import Ilustration from "@/assets/img/img1.png";
import Star from "@/assets/img/Portal.png";

export function HeroSection() {
  return (
    <section className="flex max-w-[1400px] mx-auto items-stretch h-[calc(100vh-200px)] mb-18.5 px-4 md:px-0">
      <div className="flex-1 flex items-start my-auto">
        <div>
          <h1 className="text-center text-[84px] leading-[90%] md:w-96 md:text-[120px]">
            PRODUCT DESIGNER
          </h1>
          <h2 className="text-[47px] mx-auto bg-linear-to-r from-[#FA709A] to-[#FEE140] w-fit text-transparent bg-clip-text leading-[150%] md:text-[68px] ">
            CRISTIAN MUÑOZ
          </h2>
          <div className="flex items-center justify-between mt-10 mb-6 [&>a>img]:size-8">
            <a href="">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="">
              <img src={Figma} alt="" />
            </a>
            <a href="">
              <img src={Linkedlin} alt="" />
            </a>
            <a href="">
              <img src={Twitter} alt="" />
            </a>
            <a href="">
              <img src={Telegram} alt="" />
            </a>
            <a href="">
              <img src={Medium} alt="" />
            </a>
          </div>
          <Button className="w-full bg-[#292929] rounded-none font-poppins">
            Download Curriculum Vitae <CircleArrowDown />
          </Button>
        </div>
        <img className="hidden md:block" src={Star} />
      </div>
      <img
        className="flex-1 aspect-video object-cover hidden md:block"
        src={Ilustration}
        alt=""
      />
    </section>
  );
}
