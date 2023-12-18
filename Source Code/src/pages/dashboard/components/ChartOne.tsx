import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Paper } from "../../../components";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { Button } from "@mui/material";

/**
 * @component ChartOne
 */
const ChartOne = () => {
  /* ======= Series =========*/
  const series = [
    {
      name: "A",
      type: "bar",
      stacked: true,
      data: [44, 55, 41, 67, 22, 43, 56, 20, 65],
    },
    {
      name: "B",
      type: "bar",
      stacked: true,
      data: [13, 23, 20, 8, 13, 27, 43, 11, 41],
    },
    {
      name: "C",
      type: "line",
      data: [14, 40, 45, 38, 37, 34, 46, 51],
    },
    {
      name: "D",
      type: "line",
      data: [15, 35, 41, 46, 50, 59, 61, 65],
    },
  ];

  /* ======= Options =========*/
  let options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#2e79bfff", "#8dbff0ff", "#c23a2bff", "#5a9e26ff"],
    responsive: [
      {
        options: {
          legend: {
            display: false,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "70%",
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
        "01/07/2011 GMT",
        "01/08/2011 GMT",
      ],
    },
    yaxis: [
      {
        max: 100,
        axisTicks: {
          show: true,
        },
        title: {
          text: "Left Title",
          offsetX: 10,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "8px",
            fontWeight: 400,
          },
        },
      },

      {
        max: 100,
        opposite: true,
        axisTicks: {
          show: true,
        },
        title: {
          text: "Right Title",
          offsetX: -10,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "8px",
            fontWeight: 400,
          },
        },
      },
    ],
    legend: {
      show: false,
    },
  };

  return (
    <Paper
      title="Chart one"
      icon={<InsertChartOutlinedIcon />}
      headerChildren={
        <Button variant="outlined" color="secondary">
          See All
        </Button>
      }
      sx={{
        height: 300,
      }}
    >
      <Chart width="100%" height="240px" options={options} series={series} />
    </Paper>
  );
};

export default ChartOne;
