import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Paper } from "../../../components";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import { getDailyDate, getFakerNumbers } from "../../../utils/Utils";

/**
 * @component ChartTwo
 */
const ChartTwo = () => {
  /* ======= Series =========*/
  const series = [
    {
      name: "Chart Bar A",
      type: "bar",
      data: getFakerNumbers(7, 0, 100),
    },
    {
      name: "Chart Bar B",
      type: "bar",
      data: getFakerNumbers(7, 0, 100),
    },
    {
      name: "Chart Bar C",
      type: "bar",
      data: getFakerNumbers(7, 0, 100),
    },
    {
      name: "Chart Bar D",
      type: "bar",
      data: getFakerNumbers(7, 0, 100),
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
        columnWidth: "40%",
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
        offsetX: 10,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "8px",
          fontWeight: 400,
        },
      },
    },
    xaxis: {
      type: "datetime",
      title: {
        text: "Bottom Title",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "8px",
          fontWeight: 400,
        },
      },
      categories: getDailyDate(7),
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
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
      title="Chart Two"
      icon={<AnalyticsOutlinedIcon />}
      sx={{
        height: 300,
        "& .apexcharts-legend": {
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        },
      }}
    >
      <Chart width="100%" height="240px" options={options} series={series} />
    </Paper>
  );
};

export default ChartTwo;
