//---------------------------
//File: Roadmap.js
//Author: Paulo Bertotti
//Date: 26/07/2021
//Brief: Live roadmap application Roadmap screen
//---------------------------

//--------------------------

import { useEffect, useState } from "react";
import { projects, releases } from "../config";
//--------------------------

//--------------------------
const Roadmap = () => {
  return (
    <div>
      <Timeline rows={releases} rowWidth={150} />
    </div>
  );
};
//--------------------------

//--------------------------
const Timeline = ({ rows, rowWidth }) => {
  const [positionState, setPositionSate] = useState([]);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    const firstRowDate = new Date(rows[0].date);
    const lastRowDate = new Date(rows[releases.length - 1].date);

    const totalMonths = Math.round((lastRowDate - firstRowDate) / 2629800000);

    const { initialMonth, initialYear, finalMonth, finalYear } = {
      initialMonth: firstRowDate.getMonth() + 1,
      initialYear: firstRowDate.getFullYear(),
      finalMonth: lastRowDate.getMonth() + 1,
      finalYear: lastRowDate.getFullYear(),
    };

    const newPositionState = [];
    for (
      let month = initialMonth - 1, year = initialYear;
      month <= finalMonth + 1 || year < finalYear;
      month++
    ) {
      let assignedRow;
      rows.map(row => {
        if (new Date(row.date).getMonth() + 1 === month) {
          return (assignedRow = row);
        }
      });

      if (assignedRow) {
        newPositionState.push(assignedRow);
      } else {
        newPositionState.push({ date: `${year}-${month}-01` });
      }

      if (month === 12) {
        month = 0;
        year += 1;
      }
    }

    const totalWidth = (totalMonths + 2) * rowWidth;
    setTimelineWidth(totalWidth);
    setPositionSate(newPositionState);
  }, [rows, rowWidth]);

  return (
    <div style={{ display: "flex", width: timelineWidth }}>
      {positionState.map((row, index) => (
        <div
          key={index}
          style={{
            backgroundColor: row.uuid ? `rgb(${index * 100}, 0, 0)` : "#fff",
            height: "20px",
            width: rowWidth,
          }}
        ></div>
      ))}
    </div>
  );
};
//--------------------------

//--------------------------
export default Roadmap;
//--------------------------
