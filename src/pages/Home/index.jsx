import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Notification from "../../components/Notification";
import Charts from "./components/sectionCharts/Charts";
import ChatBot from "./components/sectionChatBot/ChatBot";
import News from "./components/sectionNews/News";
import { useState } from "react";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({ status: false, message: '' });
  const [result, setResult] = useState({ status: false, message: '', success: false });
  const [newsClassify, setNewsClassify] = useState([]);
  const [activeNews, setActiveNews] = useState('');

  const onClose = () => {
    setResult({ status: false, message: '', success: false });
    setLoading({ status: false, message: '' });
    setNewsClassify([]);
  }

  return (
    <section className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <main className="flex-1 flex px-4">
        {loading.status ?
          <Notification message={loading.message} results={newsClassify} loading={loading.status} success={result.success} />
          : result.status ?
            <Notification message={result.message} onClose={onClose} results={newsClassify} loading={loading.status} success={result.success} />
            :
            <div></div>}
        <section className=" flex justify-center items-center w-8/12">
          <section className="bg-white flex flex-col gap-4 w-full h-10/12 rounded-tl-xl rounded-bl-xl p-4 shadow-lg">
            <News setActiveNews={setActiveNews} />
            <Charts newsData={newsData} />
          </section>
        </section>
        <section className=" flex justify-center items-center w-4/12">
          <section className="bg-main flex flex-col gap-4 w-full h-10/12 rounded-tr-xl rounded-br-xl p-4 shadow-lg">
            <ChatBot setNewsClassify={setNewsClassify} setLoading={setLoading} setResult={setResult} setNewsData={setNewsData} activeNews={activeNews} />
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
