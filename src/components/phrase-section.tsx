import {  Star } from "lucide-react";
import bgPhrase from "@/assets/img/background.png";

export function PhraseSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20  font-poppins font-bold px-4 md:px-0" 
    style={{ backgroundImage: `url(${bgPhrase})` }}
    >
      <h2 className="text-2xl text-center md:text-start md:text-5xl mb-20">
        Martin Fowler
      </h2>
      <p className="font-semibold text-center md:text-start max-w-6xl italic text-xl md:text-4xl">
        "Qualquer um pode escrever um código que um computador entenda. Bons
        programadores escrevem código que humanos entendam."
      </p>
      <Star className="size-32 mt-10 fill-white" />
    </section>
  );
}
