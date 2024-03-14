import chartsConfig from "../configs/chart-config";

const websiteViewsChart = {
    type: "bar",
    height: 220,
    series: [
      {
        name: "Views",
        data: [50, 20, 10, 22, 50, 10, 40],
      },
    ],
    options: {
      ...chartsConfig,
      colors: "#388e3c",
      plotOptions: {
        bar: {
          columnWidth: "16%",
          borderRadius: 5,
        },
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: ["M", "T", "W", "T", "F", "S", "S"],
      },
    },
  };
  
  const monthlyOrdersChart = {
    type: "line",
    height: 220,
    series: [
      {
        name: "Orders",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ["#0288d1"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 5,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };

  const monthlyReturnChart = {
    type: "line",
    height: 220,
    series: [
      {
        name: "Orders",
        data: [10, 25, 9, 28, 21, 18, 16, 20, 12],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ["#0288d1"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 5,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };
  
  export const statsChartsData = [
    {
      color: "white",
      title: "Website Traffic",
      description: "Last Campaign Performance",
      footer: "campaign sent 2 days ago",
      chart: websiteViewsChart,
    },
    {
      color: "white",
      title: "Monthly Orders",
      description: "15% increase in monthly orders",
      footer: "updated 4 min ago",
      chart: monthlyOrdersChart,
    },
    {
        color: "white",
        title: "Monthly Returns",
        description: "2% increase in monthly orders",
        footer: "updated 4 min ago",
        chart: monthlyReturnChart,
      },

  ];
  
  export default statsChartsData;