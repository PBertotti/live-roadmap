//---------------------------
//File: releases.js
//Author: Paulo Bertotti
//Date: 28/07/2021
//Brief: Live roadmap releases configuration;
//---------------------------

//---------------------------
import { phaseZero, phaseOne } from "../assets";
import TimelineIcon from "@material-ui/icons/Timeline";
//---------------------------

//---------------------------
const releases = [
  {
    uuid: "000-000",
    title: "FASE 0 - DESENVOLVIMENTO INICIAL",
    isFinal: true,
    date: "30-09-2021",
    image: phaseZero,
    features: [
      {
        title: "Videomonitoramento",
        icon: TimelineIcon,
      },
    ],
    fixes: [],
  },
  {
    uuid: "111-111",
    title: "FASE 1 - AMBIENTE LOCAL",
    isFinal: true,
    date: "30-05-2022",
    image: phaseOne,
    features: [
      {
        title: "Alarmes",
        icon: TimelineIcon,
      },
    ],
    fixes: [],
  },
];
//---------------------------

//---------------------------
export default releases;
//---------------------------
