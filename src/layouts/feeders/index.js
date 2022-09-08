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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MonthlyData from "layouts/feeders/components/MonthlyData";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Billing page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
import FaultImpedence from "layouts/feeders/components/FaultImpedence";
// import FaultLocation from "layouts/feeders/components/FaultLocation";
import Apex from "examples/Charts/Boxplot/Apexchart";
import AvgPower from "layouts/feeders/components/AveragePower";
import apiDataDailyChart from "layouts/dashboard/components/DailyChart/data/apiDataDailychart";
import { useState, useEffect } from "react";
// Data
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

function Feeders(props) {
  // const { sales } = reportsLineChartData;
  const {DailyVolt,DailyCurr,DailyPow} = apiDataDailyChart("120003");
  const feedervalue =props.feedervalue
  // const weeklyDataflag = true
  const [weeklyDataflag, setFlag] = useState(true);
  const changeDataflag = () => {
    setFlag(!weeklyDataflag);
  };

  return (
    
    <DashboardLayout>
      <DashboardNavbar />
      {/* <DashboardNavbar absolute isMini /> */}
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <form>
                <p>
                  <input type="checkbox" onChange={changeDataflag} checked={weeklyDataflag} />
                  {' '}
                  Weekly Data
                </p>
              </form>
            </Grid>
            <Grid item xs={12} md={12}>
              <MDBox mb={3}>
                <MonthlyData feedervalue={feedervalue} weeklyDataflag={weeklyDataflag}/>
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
           { (feedervalue==6) || (feedervalue==5 )? (
            <Grid item xs={12} md={4}>
            <MDBox mb={1}>
                <ReportsLineChart
                  color="success"
                  title="Residual Current (Mean)"
                  description={
                    <>
                    <strong>Average Change</strong><br/>
                    (<strong>15%</strong>) increase since Day 1
                    </>
                  }
                  date="updated 4 min ago"
                  chart={DailyCurr}
                />
              </MDBox>
            </Grid>) :("") }
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Feeders;
