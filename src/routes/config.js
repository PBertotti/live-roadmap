//---------------------------
//File: config.js
//Author: Paulo Bertotti
//Date: 27/07/2021
//Brief: Live roadmap route module configuration
//---------------------------

//---------------------------
import { Roadmap } from "../screens";
import { JourneyIcon } from "../components";
import ListIcon from "@material-ui/icons/List";
import TimelineIcon from "@material-ui/icons/Timeline";
//---------------------------

//---------------------------
const routeConfig = {
  settings: { defaultPublicRoute: "/roadmap" },
  routes: [
    {
      path: "/roadmap",
      type: "public",
      title: "Roadmap",
      icon: TimelineIcon,
      screen: Roadmap,
    },
    {
      path: "/changelog",
      type: "public",
      title: "Changelog",
      icon: ListIcon,
      screen: Roadmap,
    },
  ],
};
//---------------------------

//---------------------------
export default routeConfig;
//---------------------------
