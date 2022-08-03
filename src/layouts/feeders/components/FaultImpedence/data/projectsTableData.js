/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";
import MDBadge from "components/MDBadge";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import visnet from "assets/images/visnet-insitu.jpg";
import visnet2 from "assets/images/visnet-insitu-2.jpg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  // const Progress = ({ color, value }) => (
  //   <MDBox display="flex" alignItems="center">
  //     <MDTypography variant="caption" color="text" fontWeight="medium">
  //       {value}%
  //     </MDTypography>
  //     <MDBox ml={0.5} width="9rem">
  //       <MDProgress variant="gradient" color={color} value={value} />
  //     </MDBox>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "deivces", accessor: "deivces", align: "left" },
      { Header: "alaram", accessor: "alaram", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "datetime", accessor: "datetime", align: "center" },
    ],

    rows: [
      {
        deivces: <Project  image ={visnet} name="N-MB-9"  />,
        alaram: (
        <MDTypography component="a" variant="caption" color="error" fontWeight="medium">
            High Voltage
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        datetime: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),
      },
      {
        deivces: <Project  image ={visnet2} name="N-MB-9"  />,
        alaram: (
        <MDTypography component="a" variant="caption" color="error" fontWeight="medium">
            High Current {">"} 75%
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        datetime: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),
      },
    ],
  };
}
