import { BrainCog } from "lucide-react";
import { links } from "../utils/nav";
import { useEffect, useState } from "react";
import { networkFetch } from "../api/config";

const Header = () => {
  const [protocol, setProtocol] = useState('...');

  useEffect(() => {
    const getProtocol = async () => {
      const response = await networkFetch.get('/protocol');
      const data = await response.data

      setProtocol(data);
    };

    getProtocol();
   }, []) 
 
  return (
    <header className="bg-main grid grid-cols-3 gap-4 p-4 h-20 items-center">
      <section className="flex items-center gap-4">
        <BrainCog className="text-white" />
        <h1 className="font-poppins font-semibold text-white text-xl">APS - Treinamento Inteligência Artificial</h1>
      </section>
      <section className="col-span-2">
        <p className="text-white font-poppins text-xl">Protocolo: <span className="font-bold">{protocol.scheme}</span>, Versão: <span className="font-bold">{protocol.version}</span>, Ip: {protocol.ip}</p>
      </section>
    </header>
  );
};

export default Header;