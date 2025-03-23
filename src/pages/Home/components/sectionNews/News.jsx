import Slider from "react-slick";
import useFetchRss from "../../../../hooks/useFetchRss";
import NewsCard from "./NewsCard";

const News = () => {
  const { articles, loading, error } = useFetchRss();

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
          <NewsCard key={index} article={article} id={index + 1}/>
        )}
      </Slider>
    </section>
  );
};

export default News;