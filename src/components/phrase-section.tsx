import { Shield } from "lucide-react";

export function PhraseSection(){
    return(
        <section className="flex flex-col items-center justify-center py-20 bg-phrase font-poppins font-bold px-4 md:px-0">
            <h2 className="text-2xl text-center md:text-start md:text-5xl mb-20">Kaleb Lechtenberg</h2> 
            <p className="font-semibold text-center md:text-start max-w-6xl italic text-xl md:text-4xl">"Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."</p>           
            <Shield className="size-32 mt-10 fill-white" />
        </section>
    )
}