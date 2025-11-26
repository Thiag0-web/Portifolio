import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost"
        size="icon-lg">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="font-poppins">
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <nav className="px-4">
          <ul className="space-y-7.5 font-poppins">
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
        <SheetFooter>
          <Button className="bg-[#925FF0] rounded hover:bg-[#7149bb] font-poppins">
            Contact Me
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
