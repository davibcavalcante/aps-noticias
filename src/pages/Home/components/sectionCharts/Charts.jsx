import Chart from "react-apexcharts";
import { qtPorDia, clasPorNoticia } from "../../../../utils/charts";
import Slider from "react-slick";

const Charts = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <section className="h-1/2">
      <Slider {...settings}>
        <div className="w-full">
          <Chart options={qtPorDia.options} series={qtPorDia.series} type="bar" width="100%" height={300} />
        </div>
        <div className="w-full">
          <Chart options={clasPorNoticia.options} series={clasPorNoticia.series} type="donut" height={300} />
        </div>
      </Slider>
    </section>
  );
};

export default Charts;