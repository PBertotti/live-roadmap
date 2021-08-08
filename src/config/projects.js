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
        startDate: "28-06-2021",
        type: "waiting",
      },
      {
        startDate: "30-09-2021",
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
        startDate: "28-06-2021",
        type: "waiting",
      },
      {
        startDate: "30-09-2021",
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
