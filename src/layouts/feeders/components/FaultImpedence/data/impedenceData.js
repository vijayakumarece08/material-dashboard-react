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
      { Header: "", accessor: "devices",  align: "left" },
      { Header: "L1", accessor: "location", align: "left" },
      { Header: "L2", accessor: "signal_strength", align: "center" },
      { Header: "L3", accessor: "status", align: "center" },
      // { Header: "lastupdated", accessor: "lastupdated", align: "center" },
    ],

    rows: [
      {
        devices: <Author  image ="" name="Date" email="" />,
        location:  (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),
        signal_strength: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },
      {
        devices: <Author  image ="" name="Impedence Value" email="" />,
        location:  (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            189.8
          </MDTypography>
        ),
        signal_strength: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            179.2
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            198.4
          </MDTypography>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/06/2022 9.35am
          </MDTypography>
        ),

      },

      {
        devices: <Author  image ="" name="Impedence Type" email="" />,
        location:  (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Phase
          </MDTypography>
        ),
        signal_strength: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Phase
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Phase
          </MDTypography>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Phase
          </MDTypography>
        ),

      },
      {
        devices: <Author  image ="" name="Confidence Level" email="" />,
        location:  (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9
          </MDTypography>
        ),
        signal_strength: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9
          </MDTypography>
        ),
        lastupdated: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9
          </MDTypography>
        ),

      },
     
    ],
  };
}
