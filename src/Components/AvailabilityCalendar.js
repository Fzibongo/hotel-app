// AvailabilityCalendar.jsx

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AvailabilityCalendar = ({ weekOption, dayOption }) => {
  return (
    <div className="section">
      <h3 className="section-heading">Availability</h3>
      {weekOption && <p>Week Availability Calendar</p>}
      {dayOption && (
        <div>
          <h4>Day Availability Calendar</h4>
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendar;
