
import apiDataMonthlyChart from 'layouts/feeders/data/apiDatamonthlychart';
import apiDataWeeklyChart from 'layouts/feeders/data/apiDataWeeklychart';
import apiDataDailyChart from 'layouts/feeders/data/apiDataDailychart';
import React from 'react';
import Chart from "react-apexcharts";

function WeeklyData(props) {
  const feedervalue =props.feedervalue
  // {console.log({weeklyDataflag})}
  // const  { apidataOne,series, options } = apiDataDailyChart(feedervalue,weeklyDataflag);
  // const  { apidataOne,series, options } = apiDataMonthlyChart(feedervalue,weeklyDataflag);
  const { apidataOne,series, options } = apiDataWeeklyChart(feedervalue);
  


   
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

export default WeeklyData;