import React from "react";
import { Link, useNavigate } from "react-router-dom";
import protea from "../Assets/Protea-hotel-group.webp";
import wifi from "../Assets/icons8-wi-fi-50.png";
import massage from "../Assets/icons8-massage-50.png";
import pool from "../Assets/icons8-lap-pool-50 (1).png";
import gym from "../Assets/icons8-gym-50.png";
import restaurant from "../Assets/icons8-restaurant-50.png";
import bar from "../Assets/icons8-bar-counter-30.png";
import sauna from "../Assets/icons8-sauna-50.png";
import kitchen from "../Assets/icons8-kitchen-room-50.png";
import { useLocation } from "react-router-dom";



function RoomDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const navigateToBooking = () => {
    // Assuming you have a route named '/booking'
    navigate('/booking', { state: { roomData: data } });
  };

  return (
    <div className="RoomContainer">
      <div className="protea2">
        <div class="logoProtea">
          <img
            src={protea}
            alt=""
            style={{ display: "flex", alignSelf: "center" }}
          />
        </div>
      </div>
      <div>
        <h1 className="RoomHeader1">{data.name}</h1>
      </div>
      <div>
        <h2 className="Description1">{data.description}</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {data.roomView &&
          data.roomView.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`View ${index}`}
              className="view"
              style={{
                width: "750px",
                height: "250px",
                marginRight: "20px",
              }}
            />
          ))}
      </div>

      <h2 className="features">
        This room comes with state-of-the-art features
      </h2>
      <div className="border">
        <img src={wifi} alt="" className="wifi" />
        <img src={massage} alt="" className="massage" />
        <img src={pool} alt="" className="pool" />
        <img src={gym} alt="" className="gym" />
        <img src={restaurant} alt="" className="restaurant" />
        <img src={bar} alt="" className="bar" />
        <img src={sauna} alt="" className="sauna" />
        <img src={kitchen} alt="" className="kitchen" />
      </div>

      <button className="bookingButton" onClick={navigateToBooking}>
        Go to Booking
      </button>
    </div>
  );
}

export default RoomDetails;
