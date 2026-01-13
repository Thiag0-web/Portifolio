import { ProjectCard } from "./project-card";
import ticket from "@/assets/projects/tickt-system.png"
import Barbearia from "@/assets/projects/barbearia.png"
import Formulario from "@/assets/projects/Formulario.png"
import img1 from "@/assets/img/img1.png";

const projects = [
    {
        img: ticket,
        link: "",
        technologies: [ "React" ,"TypeSccript", "Shadcn" , "tailwind" ],
        title: "Ticket-System"
     },
     {
        img: Barbearia,
        link: "https://barbearia-sigma-ten.vercel.app/",
        technologies: ["React" ,"TypeSccript", "Shadcn" , "tailwind" ],
        title: "Barbearia"
     },
     {
        img: Formulario,
        link: "https://formulario-cyan-sigma.vercel.app/",
        technologies: ["React", "TypeScript", "React-Hook-Form", "zod"],
        title: "Formulario"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Em breve"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Em breve"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Em breve"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Em breve"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Em breve"
     }
]

export function ProjectsSection() {
  return (
    <section className=" max-w-[1400px] mx-auto px-4 md:px-0" id="portfolio">
      <h2 className="text-5xl mb-8">PORTIFOLIO</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {projects.map((p,index) => (
            <ProjectCard key={index} img={p.img} link={p.link} technologies={p.technologies} title={p.title} />
        ))}
      </div>
    </section>
  );
}
