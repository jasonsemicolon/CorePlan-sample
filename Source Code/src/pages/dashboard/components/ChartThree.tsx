import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { Paper } from "../../../components";

/**
 * @component ChartThree
 */
const ChartThree = () => {
  /* ======= Series =========*/
  const series = [
    {
      name: "Chart Bar A",
      type: "bar",
      data: [7],
    },
    {
      name: "Chart Bar B",
      type: "bar",
      data: [13],
    },
    {
      name: "Chart Bar C",
      type: "bar",
      data: [42],
    },
    {
      name: "Chart Bar D",
      type: "bar",
      data: [21],
    },
    {
      name: "Chart Bar E",
      type: "bar",
      data: [65],
    },
    {
      name: "Chart Bar F",
      type: "bar",
      data: [42],
    },
    {
      name: "Chart Bar G",
      type: "bar",
      data: [10],
    },
    {
      name: "Chart Bar H",
      type: "bar",
      data: [27],
    },
    {
      name: "Chart Bar I",
      type: "bar",
      data: [37],
    },
    {
      name: "Chart Bar J",
      type: "bar",
      data: [41],
    },
    {
      name: "Chart Bar K",
      type: "bar",
      data: [57],
    },
    {
      name: "Chart Bar L",
      type: "bar",
      data: [54],
    },
  ];

  /* ======= Options =========*/
  let options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        options: {
          legend: {
            display: true,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "80%",
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    yaxis: {
      title: {
        text: "Left Title",
        offsetX: 8,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "8px",
          fontWeight: 400,
        },
      },
    },
    xaxis: {
      title: {
        text: "Bottom Title",
        offsetX: 0,
        offsetY: -10,
        style: {
          color: undefined,
          fontSize: "8px",
          fontWeight: 400,
        },
      },
      categories: ["XAxisLabel"],
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 20,
        vertical: 2,
      },
      markers: {
        width: 8,
        height: 8,
        radius: 0,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <Paper
      title="Chart Three"
      icon={<InsertChartOutlinedIcon />}
      sx={{
        height: 350,
      }}
    >
      <Chart width="100%" height="300px" options={options} series={series} />
    </Paper>
  );
};

export default ChartThree;
