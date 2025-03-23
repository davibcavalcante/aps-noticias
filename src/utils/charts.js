export const qtPorDia = {
  series: [
    {
      data: [30, 40, 45, 50, 49]
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
      categories: [
        "18/03",
        "19/03",
        "20/03",
        "21/03",
        "22/03",
      ],
    },
    legend: {
      position: "bottom",
    },
  }
};

export const clasPorNoticia = {
  series: [20, 200, 100],
};

clasPorNoticia.options = {
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
  series: [20, 200, 100],
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
            formatter: () => clasPorNoticia.series.reduce((n, acc) => n + acc)
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            fontSize: '26px',
            fontWeight: 'bold',
            color: '#000',
            formatter: () => clasPorNoticia.series.reduce((n, acc) => n + acc)
          }
        }
      }
    }
  },
  legend: {
    position: 'bottom'
  }
}