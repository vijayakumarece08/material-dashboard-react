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

export default function apiDataDailyChart(instId) {
  // instId="120003"
const [apidataDailyVolt, setApidataVolt] = useState([]);
const [apidataDailyCurr, setApidataCurr] = useState([]);
const [apidataDailyPow, setApidataPow] = useState([]);

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let strTime = hours + `:${minutes} ` + ampm;
  let strdtTime = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()+' '+strTime;
  return strdtTime;
}

let todate = formatAMPM(new Date);
let currentDate = new Date();
let before1Day=new Date(currentDate.setDate(currentDate.getDate() - 1));
let fromdate= formatAMPM(before1Day);
let timeRange='DAILY';
var parent_url = 'https://changi-repo.herokuapp.com';
let volt_url = parent_url + "/get_changidb_data/?fromdate=" + fromdate + "&todate=" + todate + "&instrumentid=" + instId;
let curr_url = parent_url + "/get_changidb_idata/?fromdate=" + fromdate + "&todate=" + todate + "&instrumentid=" + instId;
let pow_url = parent_url + "/get_changidb_pdata/?fromdate=" + fromdate + "&todate=" + todate + "&instrumentid=" + instId;




function fetchProducts() {
  axios
    .get(volt_url) 
    .then((res) => {
      // console.log(res); 
      setApidataVolt(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    axios
    .get(curr_url) 
    .then((res) => {
      // console.log(res); 
      setApidataCurr(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    axios
    .get(pow_url) 
    .then((res) => {
      // console.log(res); 
      setApidataPow(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}


useEffect(() => {
  fetchProducts();
}, []);



  return {

    apidataDailyVolt:apidataDailyVolt,
    apidataDailyCurr:apidataDailyCurr,
    apidataDailyPow:apidataDailyPow,
    DailyCurr: {
      labels: apidataDailyCurr.time,
      datasets: { 
        label1: "L1", 
        data1: apidataDailyCurr.imean_l1_list ,
        label2: "L2", 
        data2: apidataDailyCurr.imean_l2_list,
        label3: "L3", 
        data3: apidataDailyCurr.imean_l3_list,
        label4: "N", 
        data4: apidataDailyCurr.imean_N_list
      },      
    },
    DailyVolt: {
      labels: apidataDailyVolt.time,
      datasets: { 
        label1: "L1", 
        data1: apidataDailyVolt.vmean_l1_list ,
        label2: "L2", 
        data2: apidataDailyVolt.vmean_l2_list,
        label3: "L3", 
        data3: apidataDailyVolt.vmean_l3_list
      },
    },

    DailyPow: {
      labels: apidataDailyPow.time,
      datasets: { 
        label1: "L1", 
        data1: apidataDailyPow.pactive_l1_list ,
        label2: "L2", 
        data2: apidataDailyPow.pactive_l2_list,
        label3: "L3", 
        data3: apidataDailyPow.pactive_l3_list
      },
      
    },
  };
}
