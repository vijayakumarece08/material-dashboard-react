
import React, { Component } from 'react';
import Chart from "react-apexcharts";

class AvgPower extends Component {
  constructor(props) {
    super(props);

    this.state = {   
      voltagedata:[], 
      series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
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
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        title: {
          text: 'Forecast',
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        yaxis: {
          min: -10,
          max: 40
        }
      },
    
    
    };
  }

componentDidMount(){



  let result_arr_current;

  fetch("https://changi-repo.herokuapp.com/get_changidb_data")
  .then(res=>res.json())
  .then ((data)=>{    
    this.setState({voltagedata:data.temp_list})
    console.log(data);
    result_arr_current = data;

  });

  console.log (result_arr_current)


}



render() {  
  // const {abc} =this.state
  const {voltagedata} = this.state
  // const {options} = this.state
  // const {series} =this.state
  // const {options_b} = this.state

  return (
    <div className='App'>

    <h2>Feeder 1</h2>
    {console.log(voltagedata)}
    <h2>Average Power</h2>

    <div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>

    {/* <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options_b}
               series={series}
               type="boxPlot"
               width="500"
            />
          </div>
        </div> */}
    </div>    

  );
}

}
  
export default AvgPower;