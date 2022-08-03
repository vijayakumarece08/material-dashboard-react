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
import AvgPower from "layouts/feeders/components/AveragePower"

// Data
// import reportsLineChartData from "layouts/feeders/data/reportsLineChartData";

function Feeders() {
  // const { sales } = reportsLineChartData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <DashboardNavbar absolute isMini /> */}
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
            <MDBox mb={3}>
            <MonthlyData/>
              </MDBox>
              </Grid>
          </Grid>
        </MDBox>      
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
            <Apex />
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex />
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex />
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
            <AvgPower/>
              </MDBox>
              </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
            <Apex />
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex />
            </Grid>
            <Grid item xs={12} md={4}>
              <Apex />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Feeders;
