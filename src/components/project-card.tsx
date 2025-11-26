import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

interface ProjectCardProps{
    img: string;
    title: string;
    technologies: string[];
    link: string;
}

export function ProjectCard(props:ProjectCardProps) {
  return (
    <div className="p-5 bg-[#0B0B0B] rounded-lg border border-[#737373] space-y-4 font-poppins">
      <img src={props.img} alt={props.title} className="aspect-video object-cover rounded-lg" />
      <h3 className="text-xl ">{props.title}</h3>
      <div className="flex gap-1 items-center">
        {props.technologies.map((tech) => (
            <Badge 
            className=" bg-[#E9DFFC] border-[#BE9FF6] text-[#784DC7]"
            key={tech}>{tech}</Badge>
         ))}
      </div>
      <Button className="w-full bg-[#292929] rounded-none">
          Visualizar
        </Button>
    </div>
  );
}
