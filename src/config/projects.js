//---------------------------
//File: projects.js
//Author: Paulo Bertotti
//Date: 28/07/2021
//Brief: Live roadmap projects configuration;
//---------------------------

//---------------------------
import { ifleetWeb, ifleetTracking, devImage } from "../assets";
//---------------------------

//---------------------------
const projects = [
  {
    uuid: "000-000",
    title: "iFleet Web",
    image: ifleetWeb,
    stages: [
      {
        startDate: "2021-06-28",
        type: "waiting",
      },
      {
        startDate: "2021-09-30",
        type: "development",
      },
    ],
    developers: [
      {
        name: "Paulo",
        photo: devImage,
      },
    ],
  },
  {
    uuid: "111-111",
    title: "iFleet Tracking",
    image: ifleetTracking,
    stages: [
      {
        startDate: "2021-06-28",
        type: "waiting",
      },
      {
        startDate: "2021-09-30",
        type: "development",
      },
    ],
    developers: [
      {
        name: "Paulo",
        photo: devImage,
      },
    ],
  },
];
//---------------------------

//---------------------------
export default projects;
//---------------------------
