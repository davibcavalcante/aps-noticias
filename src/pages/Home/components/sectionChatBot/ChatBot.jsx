import { Send } from "lucide-react";

const ChatBot = () => {
  return (
    <section className="h-full flex flex-col">
      <section className="flex-1 relative overflow-y-auto">
        <div className="sticky top-0 left-1/2">
          <h1 className="text-center font-poppins text-white text-2xl">Seja Bem-Vindo</h1>
          <h2 className="text-center font-poppins font-light text-white tracking-widest">IA de notícias</h2>
        </div>
      </section>
      <section className="">
        <form>
          <section className="flex items-center">
            <input type="text" placeholder="Faça uma pergunta sobre notícias" className="text-white placeholder:text-white border rounded-sm py-2 px-4 flex-1" />
            <div className="w-16 h-16 flex items-center justify-center">
              <Send size={30} className="text-white" />
            </div>
          </section>
        </form>
      </section>
    </section>
  );
};

export default ChatBot;