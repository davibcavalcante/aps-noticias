import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Charts from "./components/sectionCharts/Charts";
import ChatBot from "./components/sectionChatBot/ChatBot";

const Home = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 flex">
        <Charts/>
        <ChatBot/>
      </main>
      <Footer/>
    </section>
  );
};

export default Home;