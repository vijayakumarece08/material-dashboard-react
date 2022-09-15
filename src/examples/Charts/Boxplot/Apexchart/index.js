
// import React, { Component, useEffect,useState } from 'react';
// import Chart from "react-apexcharts";
// import axios from "axios";
 

// class apexBoxplot extends Component {
// constructor (props){
//   super(props);
//   // let abc ;
//   this.state ={
//     voltagedata:[],
//     series: [
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
     
//       optionsB : {
      
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

//   }
//   var boxplot_data ='test';
//   const boxplot_url = "https://changi-repo.herokuapp.com/getBoxPlotData/"
//   axios.get(boxplot_url).then((res) => {boxplot_data=res.data;}).catch((err) => {console.log(err);});
//   console.log (boxplot_data)
// }


// render() {  

  
  
  
//   // const {abc} =this.state
//   const {voltagedata} = this.state
//   // const {options} = this.state
//   const {series} =this.state
//   const {optionsB} = this.state
//   const feedervalue =this.props.feedervalue
//   const parameter =this.props.parameter

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


   
//   return 
// }

// }
  
// export default apexBoxplot;


import React, { Component, useEffect,useState } from 'react';
import Chart from "react-apexcharts";
import axios from "axios";

export default function apexBoxplotData(props) {
  // instId="120003"

    var voltagedata=[]
    
    var optionsB = {
      chart: {
      type: 'boxPlot',
      height: 350
      },
      title: {
      text: 'Amps',
      align: 'left'
      },
      plotOptions: {
      boxPlot: {
      colors: {
        upper: '#fbc658',
        lower: '#51CACF'
      }
      }
      }
      }

  const [boxplot_data, setboxplot_data] = useState([]); 
  var parent_url = 'https://changi-repo.herokuapp.com';
  var instId= 120003;
  let boxplot_url = parent_url + "/getBoxPlotData/?instrumentid=" + instId;

function fetchProducts() {
  axios.get(boxplot_url).then((res) => {setboxplot_data((res.data))}).catch((err) => {console.log(err);});

 
}


useEffect(() => {
  fetchProducts();
  
}, []);

console.log(boxplot_data)
const feedervalue =props.feedervalue
const parameter =props.parameter
const datarange =props.datarange

const curr_data = boxplot_data.current_mean_weekly
const volt_data = boxplot_data.voltage_weekly
const pow_data = boxplot_data.power_weekly  

if (datarange == 'Monthly'){
  const curr_data = boxplot_data.current_mean_monthly  
  const pow_data = boxplot_data.power_monthly  
  const volt_data = boxplot_data.voltage_monthly
}


  const ifeederListl1 = `imean_l1_F${feedervalue}_list`
  const ifeederListl2 = `imean_l2_F${feedervalue}_list`
  const ifeederListl3 = `imean_l3_F${feedervalue}_list`
  const ifeederListN = `imean_N_F${feedervalue}_list`
  const ifeederListl1_thd = `ithd_l1_F${feedervalue}_list` 
  const ifeederListl2_thd = `ithd_l2_F${feedervalue}_list`
  const ifeederListl3_thd = `ithd_l3_F${feedervalue}_list`
  const ifeederListN_thd = `ithd_N_F${feedervalue}_list`

  const pfeederListl1 = `pactive_l1_F${feedervalue}_list` 
  const pfeederListl2 = `pactive_l2_F${feedervalue}_list`
  const pfeederListl3 = `pactive_l3_F${feedervalue}_list`
  
  const prfeederListl1 = `preactive_l1_F${feedervalue}_list` 
  const prfeederListl2 = `preactive_l2_F${feedervalue}_list`
  const prfeederListl3 = `preactive_l3_F${feedervalue}_list`
  
  const vfeederListl1_thd = `vthd_l1_list` 
  const vfeederListl2_thd = `vthd_l2_list`
  const vfeederListl3_thd = `vthd_l3_list`
  

  var iListl1 =''
  var iListl2 =''
  var iListl3 =''
  var iListN =''
  var iListl1_thd =''
  var iListl2_thd =''
  var iListl3_thd =''
  var iListN_thd =''

  var pListl1 =''
  var pListl2 =''
  var pListl3 =''
  var prListl1 =''
  var prListl2 =''
  var prListl3 =''
  
  var vListl1_thd =''
  var vListl2_thd =''
  var vListl3_thd =''
  

  if (curr_data){
    iListl1 = curr_data[`${ifeederListl1}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListl2 = curr_data[`${ifeederListl2}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListl3 = curr_data[`${ifeederListl3}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListN = curr_data[`${ifeederListN}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListl1_thd = curr_data[`${ifeederListl1_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListl2_thd = curr_data[`${ifeederListl2_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListl3_thd = curr_data[`${ifeederListl3_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
    iListN_thd = curr_data[`${ifeederListN_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
  }

  if (pow_data){
    pListl1 = pow_data[`${pfeederListl1}`].map(function(each_element){return Number(each_element.toFixed(2));})
    pListl2 = pow_data[`${pfeederListl2}`].map(function(each_element){return Number(each_element.toFixed(2));})
    pListl3 = pow_data[`${pfeederListl3}`].map(function(each_element){return Number(each_element.toFixed(2));})

    prListl1 = pow_data[`${prfeederListl1}`].map(function(each_element){return Number(each_element.toFixed(2));})
    prListl2 = pow_data[`${prfeederListl2}`].map(function(each_element){return Number(each_element.toFixed(2));})
    prListl3 = pow_data[`${prfeederListl3}`].map(function(each_element){return Number(each_element.toFixed(2));})
    
  }
  if (volt_data){
    
    vListl1_thd = volt_data[`${vfeederListl1_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
    vListl2_thd = volt_data[`${vfeederListl2_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
    vListl3_thd = volt_data[`${vfeederListl3_thd}`].map(function(each_element){return Number(each_element.toFixed(2));})
    
  }

  

  var series= [
    {
    type: 'boxPlot',
    data: [
      {
        x: 'L1',
        y: [30, 40, 45, 50, 60]
      },
      {
        x: 'L2',
        y: [30, 40, 45, 50, 60]
      },
      {
        x: 'L3',
        y: [30, 40, 45, 50, 60]
      },
      {
        x: 'N',
        y: [30, 40, 45, 50, 60]
      }
    ]
    }
    ]

   if (parameter.includes("Current")) {
    if (parameter.includes("THD")) {
      optionsB.title.text="Percent %"
      series[0].data = [
        {
          x: 'L1',
          y: iListl1_thd

        },
        {
          x: 'L2',
          y: iListl2_thd
        },
        {
          x: 'L3',
          y: iListl3_thd
        },
        {
          x: 'N',
          y: iListN_thd
        }
      ]
    }
    else{
    series[0].data = [
      {
        x: 'L1',
        y: iListl1
      },
      {
        x: 'L2',
        y: iListl2
      },
      {
        x: 'L3',
        y: iListl3
      },
      {
        x: 'N',
        y: iListN
      }
    ]
  }
   }
   else if (parameter.includes("Power")) {
    if (parameter.includes("Reactive")) {
      optionsB.title.text="VAr"
      series[0].data = [
        {
          x: 'L1',
          y: pListl1
        },
        {
          x: 'L2',
          y: pListl2
        },
        {
          x: 'L3',
          y: pListl3
        }
      ]
    }
    else{
      optionsB.title.text="Watts"
    series[0].data = [
      {
        x: 'L1',
        y: prListl1
      },
      {
        x: 'L2',
        y: prListl2
      },
      {
        x: 'L3',
        y: prListl3
      }
    ]
  }
   }
   else if (parameter.includes("Voltage")) {
    if (parameter.includes("THD")) {
      optionsB.title.text="Percent %"
      series[0].data = [
        {
          x: 'L1',
          y: vListl1_thd

        },
        {
          x: 'L2',
          y: vListl2_thd
        },
        {
          x: 'L3',
          y: vListl3_thd
        },
       
      ]
  }
  else{
    series[0].data = [
      {
        x: 'L1',
        y: iListl1
      },
      {
        x: 'L2',
        y: iListl2
      },
      {
        x: 'L3',
        y: iListl3
      },
    
    ]
  }
}



  return (

      <div className='App'>
  
      <h2>Feeder {feedervalue}</h2>
      {/* {console.log(voltagedata)} */}
      <h2>{parameter}</h2>
      {/* <div id="boxplot_f1_current"></div> */}
  
      <div className="row">
            <div className="mixed-chart">
              <Chart
                options={optionsB}
                 series={series}
                 type="boxPlot"
                 width="500"
              />
            </div>
       </div>
  
      </div>
      
  
    
  );
}
