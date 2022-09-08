
import apiDataMonthlyChart from 'layouts/feeders/data/apiDatamonthlychart';
import React from 'react';
import Chart from "react-apexcharts";

function MonthlyData(props) {
  const feedervalue =props.feedervalue
  const weeklyDataflag =props.weeklyDataflag
  // {console.log({weeklyDataflag})}
  const { apidataOne,series, options } = apiDataMonthlyChart(feedervalue,weeklyDataflag);
   
  return (
    <div className='App'>

    <h2>Feeder {feedervalue}</h2>
    <h2>Current (Mean)</h2>

    <div id="chart">
      
  <Chart options={options} series={series} type="line" height={350} />
</div>
</div>
  );
}

export default MonthlyData;