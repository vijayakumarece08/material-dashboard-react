/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function configs(labels, datasets) {

   
  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label1,          
          pointRadius: 1,
          pointBorderColor: '#fbc658',
          pointHoverRadius: 1,
          borderColor: '#fbc658',          
          backgroundColor: "transparent",
          fill: false,
          data: datasets.data1,
          
        },
        {
          label: datasets.label2,
          pointRadius: 1,
          pointBorderColor: '#FFA07A',
          pointHoverRadius: 1,
          borderColor: '#FFA07A',          
          backgroundColor: "transparent",
          fill: false,
          data: datasets.data2,
        },
        {
          label: datasets.label3,
          pointRadius: 1,
          pointBorderColor: '#51CACF',
          pointHoverRadius: 1,
          borderColor: '#51CACF',          
          backgroundColor: "transparent",
          fill: false,
          data: datasets.data3,
        },
        {
          label: datasets.label4,
          pointRadius: 1,
          pointBorderColor: '##FFA07A',
          pointHoverRadius: 1,
          borderColor: '##FFA07A',          
          backgroundColor: "transparent",
          fill: false,
          data: datasets.data4,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      scales: {
        // y: {
        //   grid: {
        //     drawBorder: false,
        //     display: true,
        //     drawOnChartArea: true,
        //     drawTicks: false,
        //     borderDash: [5, 5],
        //     color: "rgba(255, 255, 255, .2)",
        //   },
        //   ticks: {
        //     display: true,
        //     color: "#f8f9fa",
        //     padding: 10,
        //     font: {
        //       size: 14,
        //       weight: 300,
        //       family: "Roboto",
        //       style: "normal",
        //       lineHeight: 2,
        //     },
        //   },
        // },
        // x: {
        //   grid: {
        //     drawBorder: false,
        //     display: false,
        //     drawOnChartArea: false,
        //     drawTicks: false,
        //     borderDash: [5, 5],
        //   },
        //   ticks: {
        //     display: true,
        //     color: "#f8f9fa",
        //     padding: 10,
        //     font: {
        //       size: 14,
        //       weight: 300,
        //       family: "Roboto",
        //       style: "normal",
        //       lineHeight: 2,
        //     },
        //   },
        // },
      },
    },
  };
}

export default configs;
