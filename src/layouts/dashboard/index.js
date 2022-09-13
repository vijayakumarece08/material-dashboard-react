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
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import apiCalculationData from "layouts/dashboard/components/DailyChart/data/apiCalculationData";
import apiDataDailyChart from "layouts/dashboard/components/DailyChart/data/apiDataDailychart";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard(props) {
  
  const { sales, tasks } = reportsLineChartData;
  const {instId} =props
  const {DailyVolt,DailyCurr,DailyPow,latesttemp} = apiDataDailyChart(instId);
  var latesttempval;
  if (latesttemp){
    latesttempval =latesttemp.slice(-1)[0]
  }


  const {consumpMonthly,consumpCumu,powerFactor,voltParam, CurrParm, PowParm,feederEnergy} = apiCalculationData(instId);

 
  var vmin='';
  var vmax='';
  var vthd='';
  var vcount=[];

  if (voltParam.min_voltage){ vmin = voltParam.min_voltage}
  if (voltParam.max_voltage){vmax = voltParam.max_voltage}
  if (voltParam.voltage_THD){vthd = voltParam.voltage_THD}    
  if (voltParam.violation_count){vcount =voltParam.violation_count.split(" ")}
  
  var curmax;
  var curmaxDate;
  if (CurrParm.max_current){
    curmax =CurrParm.max_current.split(" ")[0]
    curmaxDate= CurrParm.max_current.split("A ")[1]
  }
  var rampup_per;
  var rampup_date;
  var rampdown_per;
  var rampdown_date;
  var pmax;
  if (PowParm){
    pmax=PowParm.max_power
  if (PowParm.max_ramp_up){
    rampup_per =PowParm.max_ramp_up.split(" ")[0]
    rampup_date= PowParm.max_ramp_up.split("% ")[1]
  }
  if (PowParm.max_ramp_down){
    rampdown_per =PowParm.max_ramp_down.split(" ")[0]
    rampdown_date= PowParm.max_ramp_down.split("% ")[1]
  }
}

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
                count={consumpMonthly.energy_monthly}
                percentage={{
                  color: "success",
                  amount: consumpMonthly.percentage,
                  label: "of last month (remainng 20 days)",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Energy (Cumulative)"
                count={consumpCumu.energy_cumulative}
                percentage={{
                  color: "success",
                  amount: consumpCumu.percentage,
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
                count={powerFactor.power_factor}
                percentage={{
                  color: "success",
                  amount: powerFactor.percentage,
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
                count={latesttempval}
                percentage={{
                  color: "success",
                  amount: "",
                  // label: "Just updated",
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
                    Min Voltage: <strong>{vmin}</strong><br/>
                    Max Voltage: <strong>{vmax}</strong><br/>
                    Violation Count: {vcount[0]} <strong>{vcount[1]}</strong> {vcount[2]} <strong>{vcount[3]}</strong><br/>
                    Voltage THD: <strong>{vthd}</strong>
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
                      (<strong>{CurrParm.rate_current}</strong>) of rated current <br/>
                      Max Current: <strong>{curmax}</strong>{curmaxDate}<br/>
                      Current THD: <strong>{CurrParm.current_THD}</strong>
                    </>
                  }
                  // date="updated 4 min ago"
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
                      Max Power: <strong>{pmax}</strong>  <br/>
                      Max Ramp Up: <strong>{rampup_per}</strong> {rampup_date}<br/>
                      Max Ramp Down: <strong>{rampdown_per}</strong> {rampdown_date}
                    </>
                  }
                  // date="just updated"
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
                    value={feederEnergy.feeder_1}
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="Baggage"
                    description={<a href="/feeder2"><p>Feeder 2</p> </a>}
                    value={feederEnergy.feeder_2}
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="4Fingers"
                    description={<a href="/feeder3"><p>Feeder 3</p> </a>}
                    value={feederEnergy.feeder_3}
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
            <DefaultInfoCard
                    icon="account_balance"
                    title="Load Centre"
                    description={<a href="/feeder4"><p>Feeder 4</p> </a>}
                    value={feederEnergy.feeder_4}
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
