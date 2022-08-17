
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

  return (
    <div className='App'>

    <h2>Feeder{feedervalue}</h2>
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