import { Send } from 'lucide-react';
import { aiFetch } from '../../../../api/config';
import { useState } from "react";

const ChatBot = ({ setNewsClassify, setLoading, setResult, setNewsData, activeNews }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  const getHour = () => new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const classifyNews = async () => {
    try {
      setChatMessages(prev => [...prev, getHour() + ': Início da classificação das notícias']);
      setLoading({ status: true, message: 'Classificando notícias' });
      const response = await aiFetch.get('/classify-all');
      const data = await response.data;

      setNewsClassify(data.results);
      setNewsData(data.results);
      setResult({ status: true, message: data.message, success: false });
      setChatMessages(prev => [
        ...prev,
        `<p>${getHour()}: ${data.message}</p>`
      ]);
    } catch (error) {
      console.log(error);
      setResult({ status: true, message: 'Erro ao classificar notícias', success: false });
      setChatMessages(prev => [
        ...prev,
        `<p>${getHour()}: Erro ao classificar notícias</p>`
      ]);
    } finally {
      setLoading({ status: false, message: '' });
    }
  };

  const classifyUniqueNews = async () => {

    if (!activeNews) {
      return setChatMessages(prev => [...prev, `<p>${getHour()} + ': Selecione uma notícia para que possa ser feita a classificação'</p>`]);
    }

    try {
      setChatMessages(prev => [...prev, getHour() + ': Iniciando classificação da notícia']);
      setLoading({ status: true, message: 'Classificando notícia' });
      const response = await aiFetch.post('/classify', { text: activeNews });
      const data = await response.data;
      console.log(data)
      setResult({ status: true, message: data.message, success: true });
      setChatMessages(prev => [...prev, `<p>${getHour()}: <span style="text-decoration: underline;">${data.text}</span>: <span style="font-style: bold; text-transform: uppercase;">${data.result}</span></p>`]);
    } catch (error) {
      console.log(error);
      setResult({ status: true, message: 'Erro ao classificar notícia', success: false });
      setChatMessages(prev => [
        ...prev,
        `<p>${getHour()}: Erro ao classificar notícia</p>`
      ]);
    } finally {
      setLoading({ status: false, message: '' });
    }
  }

  const train = async () => {
    try {
      setChatMessages(prev => [...prev, getHour() + ': Início de treinamento da Inteligência Artificial']);
      setLoading({ status: true, message: 'Treinando Inteligência Artificial' });
      const response = await aiFetch.post('/train');
      const data = await response.data;

      setResult({ status: true, message: data.message, success: true });
      setChatMessages(prev => [
        ...prev,
        `<p>${getHour()}: ${data.message}</p>`
      ]);
    } catch (error) {
      console.log(error);
      setResult({ status: true, message: 'Erro ao realizar treinamento', success: false });
      setChatMessages(prev => [...prev, `<p>${getHour()} + : Erro ao realizar treinamento</p>`]);
    } finally {
      setLoading({ status: false, message: '' });
    }
  };

  const handleSendNews = async () => {
    if (!currentTitle) {
      return setChatMessages(prev => [...prev, `<p>${getHour()} + ': Selecione uma notícia para que possa ser feita a classificação'</p>`]);
    }

    try {
      setChatMessages(prev => [...prev, getHour() + ': Iniciando classificação da notícia']);
      setLoading({ status: true, message: 'Classificando notícia' });
      const response = await aiFetch.post('/classify', { text: currentTitle });
      const data = await response.data;
      console.log(data)
      setResult({ status: true, message: data.message, success: true });
      setChatMessages(prev => [...prev, `<p>${getHour()}: <span style="text-decoration: underline;">${data.text}</span>: <span style="font-style: bold; text-transform: uppercase;">${data.result}</span></p>`]);
    } catch (error) {
      console.log(error);
      setResult({ status: true, message: 'Erro ao classificar notícia', success: false });
      setChatMessages(prev => [
        ...prev,
        `<p>${getHour()}: Erro ao classificar notícia</p>`
      ]);
    } finally {
      setLoading({ status: false, message: '' });
      setCurrentTitle('');
    }
  };

  return (
    <section className="h-full flex flex-col max-h-full">
      <section className="flex-1 relative overflow-y-auto scrollbar-custom max-h-[540px]">
        <div className="sticky top-0 left-1/2 bg-main">
          <h1 className="text-center font-poppins text-white text-2xl">Seja Bem-Vindo</h1>
          <h2 className="text-center font-poppins font-light text-white tracking-widest">EcoNews IA</h2>
        </div>
        <div className='flex flex-col gap-4 py-8 overflow-auto'>
          {chatMessages.length > 0 &&
            chatMessages.map((msg, index) =>
              <div key={index} className='text-white' dangerouslySetInnerHTML={{ __html: msg }} />
            )
          }
        </div>
      </section>
      <section className="">
        <form onSubmit={(e) => e.preventDefault()}>
          <section className=" flex items-center justify-between border-t border-white p-2 gap-2 ">
            <input type="text" placeholder='Digite o título da notícia ' className='bg-white/80 border border-white p-2 rounded-sm shadow-sm flex-1' onChange={(e) => setCurrentTitle(e.target.value)} value={currentTitle} />
            <div className='bg-white p-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-light duration-300' onClick={handleSendNews}>
              <Send className='text-main' />
            </div>
          </section>
          <section className="flex items-center justify-between border-t border-white p-2 gap-2 ">
            <button
              className="bg-secondary hover:bg-light duration-200 text-white font-bold p-2 rounded-lg cursor-pointer w-1/3 text-sm" type="button" onClick={train}>
              TREINAR IA
            </button>
            <button
              className="bg-secondary hover:bg-light duration-200 text-white font-bold p-2 rounded-lg cursor-pointer w-1/3 text-sm" type="button" onClick={classifyNews}>
              CLASSIFICAR TODAS
            </button>
            <button
              className="bg-secondary hover:bg-light duration-200 text-white font-bold p-2 rounded-lg cursor-pointer w-1/3 text-sm" type="button" onClick={classifyUniqueNews}>
              CLASSIFICAR ÚNICA
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default ChatBot;