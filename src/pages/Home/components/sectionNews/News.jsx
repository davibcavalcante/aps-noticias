import Slider from "react-slick";
import useFetchRss from "../../../../hooks/useFetchRss";
import NewsCard from "./NewsCard";
import { useState } from 'react';

const News = ({ setActiveNews }) => {
  const { articles, loading, error } = useFetchRss();
  const [currentActive, setCurrentActive] = useState(0);

  const setNews = (id, title) => {
    setActiveNews(prev => title === prev ? '' : title)
    setCurrentActive(prev => id === prev ? 0 : id);
  };

  if (loading || error) return;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section className="h-1/2">
      <Slider {...settings} className="h-full">
        {articles && articles.items.map((article, index) =>
          <div key={index} className="p-2">
            <NewsCard article={article} id={index + 1} setNews={setNews} currentActive={currentActive} />
          </div>
        )}
      </Slider>
    </section>
  );
};

export default News;