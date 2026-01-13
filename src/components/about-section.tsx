import Decorator from "@/assets/img/decorator.svg";
import CardImage from "@/assets/img/img1.png";

export function AboutSection() {
  return (
    <section className="max-w-[1400px] mx-auto mt-18.5 mb-60 px-4 md:px-0" id="about">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col order-1">
          <div className="flex items-center gap-6">
            <h3 className="uppercase mb-12.5 md:mb-0 text-5xl ">Sobre mim</h3>
            <img 
            className=" hidden md:block"
            src={Decorator} alt="Decoração" />
          </div>
          <div className="flex-1 flex items-center">
            <p className="text-xl font-poppins font-bold md:w-4/5 ">
              Sobre mim{" "}
              <span className="bg-linear-to-r from-[#FA709A] to-[#FEE140] text-transparent bg-clip-text">
                Desenvolvedor Front-end
              </span>{" "}
              and Frontend Developer, I fully understand the process of design
              and development of a digital product, my job is to make a product
              usable and visually appealing, through the{" "}
              <span className="bg-linear-to-r from-[#FA709A] to-[#FEE140] text-transparent bg-clip-text">
                Design Thinking
              </span>{" "}
              methodology I manage to create products that are endearing to
              users.
            </p>
          </div>
        </div>
        <img
          src={CardImage}
          alt=""
          className="aspect-video w-full object-cover my-10 md:my-0 md:order-1 order-2"
        />
        <img
          src={CardImage}
          alt=""
          className="aspect-video w-full object-cover my-10 md:my-0 md:order-1  order-4 "
        />
        <div className="flex items-center md:w-4/5 ml-auto md:order-1  order-3">
          <p className="text-xl font-poppins font-bold ">
            I am passionate about{" "}
            <span className="bg-linear-to-r from-[#84FAB0] to-[#8FD3F4] text-transparent bg-clip-text">
              never stop learning
            </span>
            , I am constantly training and learning about new and changing{" "}
            <span className="bg-linear-to-r from-[#84FAB0] to-[#8FD3F4] text-transparent bg-clip-text">
              technology
            </span>{" "}
            trends that way I bring an updated opinion of the Tech industry.
          </p>
        </div>
        <div className="flex items-center md:w-4/5 mr-auto md:order-1 order-5">
          <p className="text-xl font-poppins font-bold ">
            My full name is{" "}
            <span className="bg-linear-to-r from-[#E0C3FC] to-[#8EC5FC] text-transparent bg-clip-text">
              Cristian David Muñoz Camayo
            </span>{" "}
            and more than what I said before I am a dreamer, I am proudly{" "}
            <span className="bg-linear-to-r from-[#07bb07]  via-[#f8ff2f]  to-[#0400ff]  text-transparent bg-clip-text">
              Colombian
            </span>{" "}
            and in me you will find a human being with the desire to do his best
            to help others.
          </p>
        </div>
        <img
          src={CardImage}
          alt=""
          className="aspect-video w-full object-cover mt-10 md:mt-0 md:order-1 order-6"
        />
      </div>
    </section>
  );
}
