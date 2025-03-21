import Chart from "react-apexcharts";

const Charts = () => {
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: series
  };

  const chartDonut = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  }

  return (
    <section className=" flex justify-center items-center w-1/2">
      <section className="flex flex-col w-10/12 h-10/12 rounded-xl p-4 shadow-lg">
        <Chart
          options={chartOptions}
          series={series}
          type="bar"
          width="500"
        />
         <Chart options={chartDonut.options} series={chartDonut.series} type="donut" width="380" />
      </section>
    </section>
  );
};

export default Charts;