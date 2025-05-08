import Chart from "react-apexcharts";
import Slider from "react-slick";

const Charts = ({ newsData }) => {
  console.log(newsData)
  const dates = newsData.map(item => item.date);
  const tags = newsData.map(item => item.tag);
  console.log(newsData)
  const uniqueTags = [...new Set(tags)];
  const qtPerTags = uniqueTags.map(tag =>
    tags.filter(item => item === tag).length
  );

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

  const formatadas = dates.map(date => {
    return date.substring(0, 5)
  });

  const unicas = [...new Set(formatadas)];

  const contagem = unicas.map(date =>
    formatadas.filter(item => item === date).length
  );
  
  console.log(unicas)

  const qtPorDia = {
    series: [
      {
        data: contagem
      }
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
      },
      title: {
        text: 'Quantidade de notícias por dia',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        categories: unicas,
      },
      legend: {
        position: "bottom",
      },
    }
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

  const tagChart = {
    series: [
      {
        data: qtPerTags
      }
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
      },
      title: {
        text: 'Quantidade de notícias por tema',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        categories: uniqueTags,
      },
      legend: {
        position: "bottom",
      },
    }
  };

  console.log(uniqueTags)  

  return (
    <section className="h-1/2 p-2">
      <Slider {...settings}>
        <div className="w-full cursor-pointer">
          <Chart options={qtPorDia.options} series={qtPorDia.series} type="bar" width="100%" height={300} />
        </div>
        <div className="w-full cursor-pointer">
          <Chart options={options} series={series.classPerNews} type="donut" height={300} />
        </div>
        <div className="w-full cursor-pointer">
          <Chart options={tagChart.options} series={tagChart.series} type="bar" width="100%" height={300} />
        </div>
      </Slider>
    </section>
  );
};

export default Charts;