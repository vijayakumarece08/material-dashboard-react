
import React, { Component } from 'react';
import Chart from "react-apexcharts";

class apexBoxplot extends Component {
constructor (props){
  super(props);
  // let abc ;
  this.state ={
    voltagedata:[],
    // options: {
    //   chart: {
    //     id: "basic-bar"
    //   },
    //   xaxis: {
    //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    //   }
    // },
    series: [
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
      ],
     
      optionsB : {
      
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

  }
}

componentDidMount(){

  
//   Array.prototype.range = function() {

//     var min = null,
//         max = null,
//         i, len;

//     for (i = 0, len = this.length; i < len; ++i)
//     {
//         var elem = this[i];
//         if (min === null || min > elem) min = elem;
//         if (max === null || max < elem) max = elem;
//     }

//     return { min: min, max: max }
// };

// function getMin(array){
//     var range = array.range();
//     return range.min;
// }

// function getMax(array){
//     var range = array.range();
//     return range.max;
// }
// function Median(data) {
//   return Quartile_50(data);
// }

// function Quartile_25(data) {
//   return Quartile(data, 0.25);
// }

// function Quartile_50(data) {
//   return Quartile(data, 0.5);
// }

// function Quartile_75(data) {
//   return Quartile(data, 0.75);
// }

// function Quartile(data, q) {
//   data=Array_Sort_Numbers(data);
//   var pos = ((data.length) - 1) * q;
//   var base = Math.floor(pos);
//   var rest = pos - base;
//   if( (data[base+1]!==undefined) ) {
//     return data[base] + rest * (data[base+1] - data[base]);
//   } else {
//     return data[base];
//   }
// }

// function Array_Sort_Numbers(inputarray){
//   return inputarray.sort(function(a, b) {
//     return a - b;
//   });
// }

// function Array_Sum(t){
//    return t.reduce(function(a, b) { return a + b; }, 0);
// }

// function Array_Average(data) {
//   return Array_Sum(data) / data.length;
// }




//   // feeders = {
//     function fn_boxchart(list1,list2,list3,list4,id){
// let chart_pact
// let el_pow
//     let options = {
// series: [
// {
// type: 'boxPlot',
// data: [
//   {
//     x: 'L1',
//     y: list1
//   },
//   {
//     x: 'L2',
//     y: list2
//   },
//   {
//     x: 'L3',
//     y: list3
//   },
//   {
//     x: 'N',
//     y: list4
//   }
// ]
// }
// ],
// chart: {
// type: 'boxPlot',
// height: 350
// },
// title: {
// text: 'Amps',
// align: 'left'
// },
// plotOptions: {
// boxPlot: {
// colors: {
//   upper: '#fbc658',
//   lower: '#51CACF'
// }
// }
// }
// };
// if (id.includes("power")) {
//     options.title.text = "Watts";
//     options.series[0].data.pop()
//      el_pow = document.querySelector(id);
//     if (el_pow != null) {
//      if (chart_pact) {
//         chart_pact.destroy()
//     }
//     chart_pact = new ApexCharts(document.querySelector(id), options);
//     chart_pact.render()
// }
// }

// if (id.includes("voltage")) {
//     options.title.text = "Volts";
//     options.series[0].data.pop()
//     let el_volt = document.querySelector(id);
//     if (el_volt != null) {
//      if (chart_volt) {
//         chart_volt.destroy()
//     }
//     chart_volt = new ApexCharts(document.querySelector(id), options);
//     chart_volt.render()
// }
// }

// if (id.includes("current")) {
// var el_curr = document.querySelector(id);
// if (el_curr != null) {
//     if (chart_curr) {
//         chart_curr.destroy()
//     }
//     chart_curr = new ApexCharts(document.querySelector(id), options);
//     chart_curr.render()
// }
// }
// }

  // $.ajax({
  //   type: "GET",
  //   url: "https://changi-repo.herokuapp.com/get_changidb_pdata/",
  //   cache: false,
  //   async: false,
  //   headers: {
  //       "accept": "application/json"
  //   },
  //   success: function (data) {
  //       result_arr = data;
  
  //   }
  // });




  let resultArrcurrent;

  fetch("https://changi-repo.herokuapp.com/get_changidb_data")
  .then(res=>res.json())
  .then ((data)=>{    
    this.setState({voltagedata:data.temp_list})
    console.log(data);
    resultArrcurrent = data;

  });

  console.log (resultArrcurrent)
//              const plot_iL1 = result_arr_current.imean_l1_list
//              const plot_iL2 = result_arr_current.imean_l2_list
//              const plot_iL3 = result_arr_current.imean_l3_list
//              const plot_iN = result_arr_current.imean_N_list

//              let list_plot_iL1
//              let list_plot_iL2
//              let list_plot_iL3
//              let list_plot_iN

// if (plot_iL1   === undefined || plot_iL1  .length > 0) {list_plot_iL1   =  [getMin(plot_iL1 .slice()).toFixed(2),Quartile_25(plot_iL1 .slice()).toFixed(2),Quartile_50(plot_iL1 .slice()).toFixed(2),Quartile_75(plot_iL1 .slice()).toFixed(2),getMax(plot_iL1 .slice()).toFixed(2)]}
// if (plot_iL2   === undefined || plot_iL2  .length > 0) {list_plot_iL2   =  [getMin(plot_iL2 .slice()).toFixed(2),Quartile_25(plot_iL2 .slice()).toFixed(2),Quartile_50(plot_iL2 .slice()).toFixed(2),Quartile_75(plot_iL2 .slice()).toFixed(2),getMax(plot_iL2 .slice()).toFixed(2)]}
// if (plot_iL3   === undefined || plot_iL3  .length > 0) {list_plot_iL3   =  [getMin(plot_iL3 .slice()).toFixed(2),Quartile_25(plot_iL3 .slice()).toFixed(2),Quartile_50(plot_iL3 .slice()).toFixed(2),Quartile_75(plot_iL3 .slice()).toFixed(2),getMax(plot_iL3 .slice()).toFixed(2)]}
// if (plot_iN   === undefined || plot_iN  .length > 0) {list_plot_iN   =  [getMin(plot_iN .slice()).toFixed(2),Quartile_25(plot_iN .slice()).toFixed(2),Quartile_50(plot_iN .slice()).toFixed(2),Quartile_75(plot_iN .slice()).toFixed(2),getMax(plot_iN .slice()).toFixed(2)]}

  // fn_boxchart([1,2,3,4,5,], [1,2,3,4,5,], [1,2,3,4,5,], [1,2,3,4,5,], "#boxplot_f1_current")



}



render() {  
  // const {abc} =this.state
  const {voltagedata} = this.state
  // const {options} = this.state
  const {series} =this.state
  const {optionsB} = this.state
  const feedervalue =this.props.feedervalue
  const parameter =this.props.parameter

   if (parameter.includes("Current")) {
    if (parameter.includes("THD")) {
      optionsB.title.text="Percent %"
      series[0].data = [
        {
          x: 'L1',
          y: [5.76,7.26,8.09,9.57,12.67 ]

        },
        {
          x: 'L2',
          y: [5.69,7.45,8.4,9.55,15.95]
        },
        {
          x: 'L3',
          y: [5.25,7.57,8.44,9.36,13.09]
        },
        {
          x: 'N',
          y: [7.26,8.32,9.94,10.28,22.2]
        }
      ]
    }
    else{
    series[0].data = [
      {
        x: 'L1',
        y: [72.43, 102.70, 170.20,202.50 ,270.50 ]
      },
      {
        x: 'L2',
        y: [65.66, 105.70, 143, 169.20, 238.30]
      },
      {
        x: 'L3',
        y: [67.95, 90.05, 146, 180.2, 249.2]
      },
      {
        x: 'N',
        y: [14.51, 25.72, 38.83 , 53.85, 111.8]
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
          y: [2976.5,4840.9,5335.5,5825.6,7888.9 ]
        },
        {
          x: 'L2',
          y: [2257.9,4069.7,4652.4,5177.6,6825.9]
        },
        {
          x: 'L3',
          y: [5207.8,6960.3,7939.1,9346.3,12614]
        }
      ]
    }
    else{
      optionsB.title.text="Watts"
    series[0].data = [
      {
        x: 'L1',
        y: [16099,23602,39700,47360,63380]

      },
      {
        x: 'L2',
        y: [15159,24404,33296,39404,55890]
      },
      {
        x: 'L3',
        y: [14657,20175,33473,41723,57727]
      }
    ]
  }
   }
   else   {
    optionsB.title.text="Volts"
    series[0].data = [
      {
        x: 'L1',
        y: [232.47,235.95,236.55,237.31,239.62 ]
      },
      {
        x: 'L2',
        y: [232.71,236.34,236.9,237.6,239.86]
      },
      {
        x: 'L3',
        y: [233.74,237.45,238,238.66,240.83]
      }
      
      
      
    ]
  }


   
  return (
    <div className='App'>

    <h2>Feeder {feedervalue}</h2>
    {console.log(voltagedata)}
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

}
  
export default apexBoxplot;