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

// Material Dashboard 2 React example components
// import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import apiDataDailyChart from "layouts/dashboard/components/DailyChart/data/apiDataDailychart";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard(props) {
  
  const { sales, tasks } = reportsLineChartData;
  const {instId} =props
  const {DailyVolt,DailyCurr,DailyPow} = apiDataDailyChart(instId);
  {console.log("inside dashboard - insit id ")}
  {console.log(props)}
  // {console.log(apidataDailyVolt)}
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Consumption (Monthly)"
                count="15898 Kwh"
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Energy (Cumulative)"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Power factor"
                count="0.97"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Temperature"
                count="28C"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={4} md={4} lg={4}>
              <MDBox mb={1}>
              <ReportsLineChart
                  color="info"
                  title="Voltage (Mean)"
                  description={
                    <>
                    Min Voltage: <strong>228V</strong><br/>
                    Max Voltage: <strong>238V</strong><br/>
                    Violation Count: 3 (<strong>+6%</strong>), 2 (<strong>-6%</strong>)<br/>
                    Voltage THD: <strong>2.3%</strong>
                    </>
                  }
                  date="just updated"
                  chart={DailyVolt}
                />
                
              </MDBox>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <MDBox mb={1}>
                <ReportsLineChart
                  color="success"
                  title="Current (Mean)"
                  description={
                    <>
                      (<strong>65%</strong>) of rated current <br/>
                      Max Current: <strong>720A</strong> @ Jun-28 09:40-09:50 <br/>
                      Current THD: <strong>7.5%</strong>
                    </>
                  }
                  date="updated 4 min ago"
                  chart={DailyCurr}
                />
              </MDBox>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <MDBox mb={1}>
                <ReportsLineChart
                  color="dark"
                  title="Power (Mean)"
                  description={
                    <>                  
                      Max Power: <strong>165kW</strong>  <br/>
                      Max Ramp Up: <strong>17%</strong> (L1) @ Jun-28 09:40-09:50<br/>
                      Max Ramp Down: <strong>21%</strong> (L2) @ Jun-28 09:40-09:50
                    </>
                  }
                  date="just updated"
                  chart={DailyPow}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
         <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="Kopitiam"
                    description={<a href="/feeder1"><p>Feeder 1</p> </a>}
                    value="120 kW"
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="Baggage"
                    description={<a href="/feeder2"><p>Feeder 2</p> </a>}
                    value="223 kW"
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="4Fingers"
                    description={<a href="/feeder3"><p>Feeder 3</p> </a>}
                    value="750 kW"
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="Load Centre"
                    description={<a href="/feeder4"><p>Feeder 4</p> </a>}
                    value="112 kW"
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="NA"
                    description={<a href="/feeder5"><p>Feeder 5</p> </a>}
                    value="0 kW"
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="NA"
                    description= {<a href="/feeder6"><p>Feeder 6</p> </a>}
                    value="0 kW"
                  />            
            </Grid>
          </Grid>
        </MDBox> 
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
