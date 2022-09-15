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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Multiplot from "layouts/multiplot"
import Tables from "layouts/tables";
// import Billing from "layouts/billing";
import Feeders from "layouts/feeders";
// import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [

  {
    type: "none",
    name: "Dashboard",
    key: "Dashboard",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "N-MB-9",
    key: "nmb9",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/N-MB-9",
    component: <Dashboard instId="120003" />,
  },
  {
    type: "collapse",
    name: "NYP-LV-1",
    key: "nyplv1",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/NYP-LV-1",
    component: <Dashboard instId="2087740"/>,
  },
  {
    type: "collapse",
    name: "NYP-LV-2",
    key: "nyplv2",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/NYP-LV-2",
    component: <Dashboard instId="nyplv2"/>,
  },
  {
    type: "collapse",
    name: "NYP-LV-3",
    key: "nyplv3",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/NYP-LV-3",
    component: <Dashboard instId="nyplv3" />,
  },
  {
    type: "collapse",
    name: "MULTIPLOT",
    key: "multiplot",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/multiplot/",
    component: <Multiplot/>,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "dummy",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "dummy",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "feeders",
    name: "feeder1",
    key: "feeder1",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/feeder1",
    component: <Feeders feedervalue="1" />,
  },
  {
    type: "feeders",
    name: "feeder2",
    key: "feeder2",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/feeder2",
    component: <Feeders feedervalue="2" />,
  },
  {
    type: "feeders",
    name: "feeder3",
    key: "feeder3",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/feeder3",
    component: <Feeders feedervalue="3" />,
  },
  {
    type: "feeders",
    name: "feeder4",
    key: "feeder4",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/feeder4",
    component: <Feeders feedervalue="4" />,
  },
  {
    type: "feeders",
    name: "feeder5",
    key: "feeder5",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/feeder5",
    component: <Feeders feedervalue="5" />,
  },
  {
    type: "feeders",
    name: "feeder6",
    key: "feeder6",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/feeder6",
    component: <Feeders feedervalue="6" />,
  },

    // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
   // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
];

export default routes;
