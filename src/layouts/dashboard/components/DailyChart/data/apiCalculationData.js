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

export default function apiCalculationData(instId) {
  // instId="120003"
const [consumpMonthly, setconsumpMonthly] = useState([]);
const [consumpCumu, setconsumpCumu] = useState([]);
const [powerFactor, setpowerFactor] = useState([]);
// const [temp, settemp] = useState([]);
const [voltParam, setvoltParam] = useState([]);
const [CurrParm,  setCurrParm] = useState([]);
const [PowParm, setAPowParm] = useState([]);
const [feederEnergy, setfeederEnergy] = useState([]); 

var parent_url = 'https://changi-repo.herokuapp.com';

let consumpMonthly_url = parent_url + "/energyconsumptionmonthly/?instrumentid=" + instId;
let consumpCumu_url = parent_url + "/energyconsumptioncumulative/?instrumentid=" + instId;
let powerFactor_url = parent_url + "/powerfactor/?instrumentid=" + instId;
// let temp_url = parent_url + "/latestdatatemp/?instrumentid=" + instId;
let voltParam_url = parent_url + "/voltageparameters/?instrumentid=" + instId;
let CurrParm_url = parent_url + "/currentparameters/?instrumentid=" + instId;
let PowParm_url = parent_url + "/powerparameters/?instrumentid=" + instId;
let feederEnergy_url = parent_url + "/feedersenergyconsumption/?instrumentid=" + instId;


function fetchProducts() {
  axios.get(consumpMonthly_url).then((res) => {setconsumpMonthly(res.data);}).catch((err) => {console.log(err);});
  axios.get(consumpCumu_url).then((res) => {setconsumpCumu(res.data);}).catch((err) => {console.log(err);});
  axios.get(powerFactor_url).then((res) => {setpowerFactor(res.data);}).catch((err) => {console.log(err);});
  // axios.get(temp_url).then((res) => {settemp(res.data);}).catch((err) => {console.log(err);});
  axios.get(voltParam_url).then((res) => {setvoltParam(res.data);}).catch((err) => {console.log(err);});
  axios.get(CurrParm_url).then((res) => {setCurrParm(res.data);}).catch((err) => {console.log(err);});
  axios.get(PowParm_url).then((res) => {setAPowParm(res.data);}).catch((err) => {console.log(err);});
  axios.get(feederEnergy_url).then((res) => {setfeederEnergy(res.data);}).catch((err) => {console.log(err);});

  // axios
  //   .get(curr_url) 
  //   .then((res) => {
  //     // console.log(res); 
  //     setApidataCurr(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });    
}


useEffect(() => {
  fetchProducts();
}, []);



  return {
    consumpMonthly:consumpMonthly,
    consumpCumu:consumpCumu,
    powerFactor:powerFactor,
    voltParam:voltParam,
    CurrParm:CurrParm,
    PowParm:PowParm,
    feederEnergy:feederEnergy,  
  };
}
