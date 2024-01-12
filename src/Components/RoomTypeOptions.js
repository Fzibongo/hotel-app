// RoomTypeOptions.jsx

import React from "react";

const RoomTypeOptions = ({ roomType, setRoomType }) => {
  return (
    <div className="section">
      <h3 className="section-heading">Room Type</h3>
      <select
        className="room-type"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
      >
        <option value="single">Single</option>
        <option value="double">Double</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default RoomTypeOptions;
