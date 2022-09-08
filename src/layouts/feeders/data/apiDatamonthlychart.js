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

export default function apiDataMonthlyChart(feedervalue,weeklyDataflag) {
  const feederListl1 = `imean_l1_F${feedervalue}_list`
  const feederListl2 = `imean_l2_F${feedervalue}_list`
  const feederListl3 = `imean_l3_F${feedervalue}_list`
  const feederListN = `imean_N_F${feedervalue}_list`
  const flag = `${weeklyDataflag}`
  const [dataRange, setDataRange] =useState(`WEEKLY`)
  const [apidata, setApidata] = useState([])
  // {console.log(dataRange)} 
  // {console.log(`${weeklyDataflag}`)} 
function fetchProducts() {
   
  if (flag=='true') {
    setDataRange (`WEEKLY`)
  }
  else {
    setDataRange (`MONTHLY`)
  }

  axios
    .get("https://changi-repo.herokuapp.com/getJsonDBData/?timerange="+`${dataRange}`) 
    .then((res) => {
      // console.log(res); 
      setApidata(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}


useEffect(() => {
  fetchProducts();
});



  return {

    apidataOne:apidata,
    series: [{
              name: 'L1',
              data :apidata[`${feederListl1}`]
            },
            {
              name: 'L2',
              data :apidata[`${feederListl2}`]
            },
            {
              name: 'L3',
              data :apidata[`${feederListl3}`]
            },
            {
              name: 'N',
              data :apidata[`${feederListN}`]
            }],
    options: {
              chart: {
                height: 350,
                type: 'line',
              },
              forecastDataPoints: {
                count: 7
              },
              stroke: {
                width: 2,
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories:apidata.time ,
              },
              yaxis: [{
                labels: {
                   formatter: function(val) {
                    return val.toFixed(2);
                  }
               }
              }]
            },
  };
}
