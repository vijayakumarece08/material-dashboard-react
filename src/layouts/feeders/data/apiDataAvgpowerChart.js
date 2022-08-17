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

// import { useState } from "reasct";
import { useState, useEffect } from "react";
import axios from "axios";


export default function apiDataAvgpowerChart(feedervalue) {
const feederListl1 = `pactive_l1_F${feedervalue}_list_avg`
const feederListl2 = `pactive_l2_F${feedervalue}_list_avg`
const feederListl3 = `pactive_l3_F${feedervalue}_list_avg`

const [apidataAvg, setApidataAvg] = useState([])
{console.log("inside apiDataAvgpowerChart")}
{console.log(feederListl1)}
function fetchProducts() {
  axios
    .get("https://changi-repo.herokuapp.com/getJsonDBData/?timerange=AVERAGE") 
    .then((res) => {
      console.log(res); 
      setApidataAvg(res.data.avg_pow_mon);
    })
    .catch((err) => {
      console.log(err);
    });
}
useEffect(() => {
  fetchProducts();
}, []);



  return {

    apidataOne:apidataAvg,
    series: [{
              name: 'L1',
              data : apidataAvg[`${feederListl1}`]
            },
            {
              name: 'L2',
              data : apidataAvg[`${feederListl2}`]
            },
            {
              name: 'L3',
              data : apidataAvg[`${feederListl3}`]
            }
          ],
    options: {
              chart: {
                height: 350,
                type: 'line',
              },
              forecastDataPoints: {
                count: 7
              },
              stroke: {
                width: 3,
                curve: 'smooth'
              },
              xaxis: {
                // type: 'datetime',
                categories: ['Curr Month(M)','M-1','M-2','M-3','M-4','M-5','M-6'],
                // categories:apidata.time ,
                
                // tickAmount: 10,
                // labels: {
                //   formatter: function(value, timestamp, opts) {
                //     return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                //   }
                // }
              },
              // title: {
              //   text: 'Forecast',
              //   align: 'left',
              //   style: {
              //     fontSize: "16px",
              //     color: '#666'
              //   }
              // },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#FDD835'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100,100 , 100]
                },
              }
              // },
              // yaxis: {
              //   min: -10,
              //   max: 40
              // }
            },
  };
}
