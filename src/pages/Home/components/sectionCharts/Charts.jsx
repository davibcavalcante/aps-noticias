import Chart from "react-apexcharts";
import { qtPorDia } from "../../../../utils/charts";
import Slider from "react-slick";

const Charts = ({ newsData }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false
  };

  const series = {
    classPerNews : [
      newsData.filter((item => item.classificacao === 'boa')).length,
      newsData.filter((item => item.classificacao === 'ruim')).length,
      newsData.filter((item => item.classificacao === 'irrelevante')).length,
    ]
  };

  const options = {
    chart: {
      type: 'donut',
    },
    title: {
      text: 'Classificação das notícias por período'
    },
    labels: [
      'Notícias boas',
      'Notícias ruins',
      'Notícias irrelevantes'
    ],
    series: series.classPerNews,
    colors: ['#10FF30', '#FF1010', '#C4C4C4'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 200
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              fontWeight: 'bold',
              color: ['#000']
            },
            value: {
              show: true,
              fontSize: '24px',
              color: ['#000'],
              formatter: () => series.classPerNews.reduce((n, acc) => n + acc)
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '26px',
              fontWeight: 'bold',
              color: '#000',
              formatter: () => series.classPerNews.reduce((n, acc) => n + acc)
            }
          }
        }
      }
    },
    legend: {
      position: 'bottom'
    }
  }

  return (
    <section className="h-1/2 p-2">
      <Slider {...settings}>
        <div className="w-full">
          <Chart options={qtPorDia.options} series={qtPorDia.series} type="bar" width="100%" height={300} />
        </div>
        <div className="w-full">
          <Chart options={options} series={series.classPerNews} type="donut" height={300} />
        </div>
      </Slider>
    </section>
  );
};

export default Charts;