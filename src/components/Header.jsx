import { BrainCog } from "lucide-react";
import { links } from "../utils/nav";

const Header = () => {
  return (
    <header className="bg-main grid grid-cols-3 gap-4 p-4 h-20">
      <section className="flex items-center gap-4">
        <BrainCog className="text-white" />
        <h1 className="font-poppins font-semibold text-white text-xl">APS - Treinamento Inteligência Artificial</h1>
      </section>
    </header>
  );
};

export default Header;