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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
 import visnet from "assets/images/visnet-insitu.jpg";
 import visnet2 from "assets/images/visnet-insitu-2.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "devices", accessor: "devices",  align: "left" },
      { Header: "location", accessor: "location", align: "left" },
      { Header: "signal_strength", accessor: "signal_strength", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "lastupdated", accessor: "lastupdated", align: "center" },
    ],

    rows: [
      {
        devices: <Author  image ={visnet} name="N-MB-9" email="SubstationID - 120003" />,
        location: <Job title="Changi Terminal 3" description="" />,
        signal_strength: (
        <MDTypography component="a" variant="caption" color="success" fontWeight="medium">
            Good
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },
      {
        devices: <Author image ={visnet2} name="NYP-LV-1" email="SubstationID - 2087740" />,
        location: <Job title="Nanyang Polytechnic" description="" />,
        signal_strength: (
        <MDTypography component="a" variant="caption" color="success" fontWeight="medium">
            Good
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },

      {
        devices: <Author name="NYP-LV-2" email="SubstationID - " />,
        location: <Job title="Nanyang Polytechnic" description="" />,
        signal_strength: (
        <MDTypography component="a" variant="caption" color="error" fontWeight="medium">
            Weak
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },
      {
        devices: <Author name="NYP-LV-3" email="SubstationID - " />,
        location: <Job title="Nanyang Polytechnic" description="" />,
        signal_strength: (
        <MDTypography component="a" variant="caption" color="error" fontWeight="medium">
            Weak
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },
      {
        devices: <Author name="NYP-LV-4" email="SubstationID - " />,
        location: <Job title="Nanyang Polytechnic" description="" />,
        signal_strength: (
        <MDTypography component="a" variant="caption" color="error" fontWeight="medium">
            Weak
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },
    ],
  };
}
