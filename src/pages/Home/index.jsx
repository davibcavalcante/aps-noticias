import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Charts from "./components/sectionCharts/Charts";
import ChatBot from "./components/sectionChatBot/ChatBot";
import News from "./components/sectionNews/News";

const Home = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <main className="flex-1 flex px-4">
        <section className=" flex justify-center items-center w-8/12">
          <section className="bg-white flex flex-col gap-4 w-full h-10/12 rounded-tl-xl rounded-bl-xl p-4 shadow-lg">
            <News />
            <Charts />
          </section>
        </section>
        <section className=" flex justify-center items-center w-4/12">
          <section className="bg-main flex flex-col gap-4 w-full h-10/12 rounded-tr-xl rounded-br-xl p-4 shadow-lg">
            <ChatBot />
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
