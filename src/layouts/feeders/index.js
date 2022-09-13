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

// @mui material components
// import * as React from react;
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import { FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MonthlyData from "layouts/feeders/components/MonthlyData";
import WeeklyData from "layouts/feeders/components/WeeklyData";
import DailyData from "layouts/feeders/components/DailyData";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Billing page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
import FaultImpedence from "layouts/feeders/components/FaultImpedence";
// import FaultLocation from "layouts/feeders/components/FaultLocation";
import Apex from "examples/Charts/Boxplot/Apexchart";
import AvgPower from "layouts/feeders/components/AveragePower";
// import apiDataDailyChart from "layouts/dashboard/components/DailyChart/data/apiDataDailychart";
import apiDataDailyChart from "layouts/feeders/data/apiDataDailychart";
import { useState } from "react";
// Data
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import Chart from "react-apexcharts";

function Feeders(props) {
  // const { sales } = reportsLineChartData;  
  const feedervalue =props.feedervalue
  var feedervalue_residual =5;
  if (feedervalue==1 || feedervalue==3 || feedervalue==5) {
    feedervalue_residual =5
  }
  if (feedervalue==1 || feedervalue==3 || feedervalue==6) {
    feedervalue_residual = 6
  }
  const {apidataOne,series, options} = apiDataDailyChart(feedervalue_residual);
    // const weeklyDataflag = true
  const changeDataflag = () => {
    setFlag(!weeklyDataflag);
  };
  const [value, setValue] = useState('Daily');

  const handleChange = e => {
    console.log(e.target.value)
    setValue(e.target.value);
  };
var dataRange;
  if (value == 'Daily') {
      dataRange = <DailyData feedervalue={feedervalue} /> ;
  } else if (value == 'Weekly'){
    dataRange = <WeeklyData feedervalue={feedervalue} /> ;
  }
  else {
    dataRange = <MonthlyData feedervalue={feedervalue} /> ;
  } 

  return (
    
    <DashboardLayout>
      <DashboardNavbar />
      {/* <DashboardNavbar absolute isMini /> */}
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Data Range</FormLabel>
                <RadioGroup row 
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            defaultValue="Daily"
                            name="row-radio-buttons-group" 
                            value={value}
                            onChange={handleChange}
                            >
                  <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />
                  <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" />
                  <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <MDBox mb={3}>
                {/* <MonthlyData feedervalue={feedervalue} weeklyDataflag={weeklyDataflag}/>  */}
                {dataRange}
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>      
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
            <Apex feedervalue={feedervalue} parameter = "Current (Mean)"/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex feedervalue={feedervalue} parameter = "Power (Active)"/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex feedervalue={feedervalue} parameter = "Power (Reactive)"/>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox mb={3}>
      <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <FaultImpedence/>
          </Grid>
          {/* <Grid item xs={12} md={5}>
              <FaultLocation />
            </Grid> */}
            </Grid>
        </MDBox>
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
            <MDBox mb={3}>
            <AvgPower feedervalue={feedervalue}/>
              </MDBox>
              </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
            <Apex feedervalue={feedervalue} parameter = "Voltage (THD)"/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex feedervalue={feedervalue} parameter = "Current (THD)"/>
            </Grid>
           
            <Grid item xs={12} md={4}>
            <MDBox mb={1}>
                {/* <ReportsLineChart
                  color="success"
                  title="Residual Current (Mean)"
                  description={
                    <>
                    <strong>Average Change</strong><br/>
                    (<strong>15%</strong>) increase since Day 1
                    </>
                  }
                  date="updated 4 min ago"
                  chart = {DailyCurr}                     
                /> */}
                <Chart options={options} series={[series[0]]} type="line" height={350} />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Feeders;
