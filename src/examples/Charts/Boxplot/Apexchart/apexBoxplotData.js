

// import React, { Component, useEffect,useState } from 'react';
// import Chart from "react-apexcharts";
// import axios from "axios";

// export default function apexBoxplotData(parameter,feedervalue,instId) {
//   // instId="120003"

//     var voltagedata=[],
//     var series= [
//       {
//       type: 'boxPlot',
//       data: [
//         {
//           x: 'L1',
//           y: [30, 40, 45, 50, 60]
//         },
//         {
//           x: 'L2',
//           y: [30, 40, 45, 50, 60]
//         },
//         {
//           x: 'L3',
//           y: [30, 40, 45, 50, 60]
//         },
//         {
//           x: 'N',
//           y: [30, 40, 45, 50, 60]
//         }
//       ]
//       }
//       ],
//     var optionsB = {
//       chart: {
//       type: 'boxPlot',
//       height: 350
//       },
//       title: {
//       text: 'Amps',
//       align: 'left'
//       },
//       plotOptions: {
//       boxPlot: {
//       colors: {
//         upper: '#fbc658',
//         lower: '#51CACF'
//       }
//       }
//       }
//       }

//   const [boxplot_data, setboxplot_data] = useState([]); 
//   var parent_url = 'https://changi-repo.herokuapp.com';
//   let boxplot_url = parent_url + "/getBoxPlotData/?instrumentid=" + instId;

// function fetchProducts() {
//   axios.get(boxplot_url).then((res) => {setboxplot_data(res.data);}).catch((err) => {console.log(err);});
// }

// useEffect(() => {
//   fetchProducts();
// }, []);

//   // const {abc} =this.state
//   // const {voltagedata} = this.state
//   // const {options} = this.state
//   // const {series} =this.state
//   // const {optionsB} = this.state
//   // const feedervalue =this.props.feedervalue
//   // const parameter =this.props.parameter


//    if (parameter.includes("Current")) {
//     if (parameter.includes("THD")) {
//       optionsB.title.text="Percent %"
//       series[0].data = [
//         {
//           x: 'L1',
//           y: [5.76,7.26,8.09,9.57,12.67 ]

//         },
//         {
//           x: 'L2',
//           y: [5.69,7.45,8.4,9.55,15.95]
//         },
//         {
//           x: 'L3',
//           y: [5.25,7.57,8.44,9.36,13.09]
//         },
//         {
//           x: 'N',
//           y: [7.26,8.32,9.94,10.28,22.2]
//         }
//       ]
//     }
//     else{
//     series[0].data = [
//       {
//         x: 'L1',
//         y: [72.43, 102.70, 170.20,202.50 ,270.50 ]
//       },
//       {
//         x: 'L2',
//         y: [65.66, 105.70, 143, 169.20, 238.30]
//       },
//       {
//         x: 'L3',
//         y: [67.95, 90.05, 146, 180.2, 249.2]
//       },
//       {
//         x: 'N',
//         y: [14.51, 25.72, 38.83 , 53.85, 111.8]
//       }
//     ]
//   }
//    }
//    else if (parameter.includes("Power")) {
//     if (parameter.includes("Reactive")) {
//       optionsB.title.text="VAr"
//       series[0].data = [
//         {
//           x: 'L1',
//           y: [2976.5,4840.9,5335.5,5825.6,7888.9 ]
//         },
//         {
//           x: 'L2',
//           y: [2257.9,4069.7,4652.4,5177.6,6825.9]
//         },
//         {
//           x: 'L3',
//           y: [5207.8,6960.3,7939.1,9346.3,12614]
//         }
//       ]
//     }
//     else{
//       optionsB.title.text="Watts"
//     series[0].data = [
//       {
//         x: 'L1',
//         y: [16099,23602,39700,47360,63380]

//       },
//       {
//         x: 'L2',
//         y: [15159,24404,33296,39404,55890]
//       },
//       {
//         x: 'L3',
//         y: [14657,20175,33473,41723,57727]
//       }
//     ]
//   }
//    }
//    else   {
//     optionsB.title.text="Volts"
//     series[0].data = [
//       {
//         x: 'L1',
//         y: [232.47,235.95,236.55,237.31,239.62 ]
//       },
//       {
//         x: 'L2',
//         y: [232.71,236.34,236.9,237.6,239.86]
//       },
//       {
//         x: 'L3',
//         y: [233.74,237.45,238,238.66,240.83]
//       }
      
      
      
//     ]
//   }



//   return {    
      
    
//   };
// }
