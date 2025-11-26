import { ProjectCard } from "./project-card";
import img1 from "@/assets/img/img1.png";

const projects = [
    {
        img:img1,
        link: "",
        technologies: ["TypeSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     },
     {
        img:img1,
        link: "",
        technologies: ["JavaSccript", "Teste"],
        title: "Projeto1"
     }
]

export function ProjectsSection() {
  return (
    <section className=" max-w-[1400px] mx-auto px-4 md:px-0">
      <h2 className="text-5xl mb-8">PORTIFOLIO</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {projects.map((p,index) => (
            <ProjectCard key={index} img={p.img} link={p.link} technologies={p.technologies} title={p.title} />
        ))}
      </div>
    </section>
  );
}
