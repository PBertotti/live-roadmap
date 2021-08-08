//---------------------------
//File: Roadmap.js
//Author: Paulo Bertotti
//Date: 26/07/2021
//Brief: Live roadmap application Roadmap screen
//---------------------------

//--------------------------
import { useEffect } from "react";
import { projects, releases } from "../config";
//--------------------------

//--------------------------
const Roadmap = () => {
  let boardWidth;

  useEffect(() => {
    const firstReleaseDate = releases[0].date;
    const lastReleaseDate = releases[releases.length - 1].date;
  }, []);

  return <div></div>;
};
//--------------------------

//--------------------------
export default Roadmap;
//--------------------------
