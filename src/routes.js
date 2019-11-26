import Dashboard from "@material-ui/icons/Dashboard";
import DashboardPage from "./views/Dashboard";
import Analytics from "./views/Analytics";
import Transcriptions from "views/Transcriptions";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/analytics",
    name: "Analytics",
    rtlName: "لوحة القيادة",
    icon: "timeline",
    component: Analytics,
    layout: "/admin"
  },
  {
    path: "/transcriptions",
    name: "Transcriptions",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Transcriptions,
    layout: "/admin"
  }
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // }
];

export default dashboardRoutes;
