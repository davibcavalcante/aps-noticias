import { BrainCog } from "lucide-react";
import { links } from "../utils/nav";

const Header = () => {
  return (
    <header className="bg-main grid grid-cols-3 gap-4 p-4">
      <section className="flex items-center gap-4">
        <BrainCog className="text-white" />
        <h1 className="font-poppins font-semibold text-white text-xl">APS - Treinamento Inteligência Artificial</h1>
      </section>
      <nav className="justify-self-center">
        <ul className="flex items-center gap-4 font-poppins text-white text-lg font-light">
          {links.map((link, index) =>
            <li key={index} onClick={link.func} className="hover:text-light duration-300 cursor-pointer">
              {link.label}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;