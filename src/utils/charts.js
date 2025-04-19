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