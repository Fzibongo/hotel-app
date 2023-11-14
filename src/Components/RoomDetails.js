import React from "react";
import { Link } from "react-router-dom";
import protea from "../Assets/Protea-hotel-group.webp";
import view1 from "../Assets/160905120127-presidential-suites-st-regis-dubai.jpg";
import view2 from "../Assets/Labotessa-PRESIDENTIAL-SUITE-2022-25-768x511.jpg";
import view3 from "../Assets/JAKGH-P0600-Plaza-Suite-Bedroom.16x9.webp";
import wifi from "../Assets/icons8-wi-fi-50.png";
import massage from "../Assets/icons8-massage-50.png";
import pool from "../Assets/icons8-lap-pool-50 (1).png";
import gym from "../Assets/icons8-gym-50.png";
import restaurant from "../Assets/icons8-restaurant-50.png";
import bar from "../Assets/icons8-bar-counter-30.png";
import sauna from "../Assets/icons8-sauna-50.png";
import kitchen from "../Assets/icons8-kitchen-room-50.png";
import { useLocation } from "react-router-dom"

function RoomDetails() {

  const location = useLocation();
  const data = location.state;
  console.log(data)
 
  return (
    <div className="protea2">
      <div class="logoProtea">
        <img
          src={protea}
          alt=""
          style={{ display: "flex", alignSelf: "center" }}
        />

      </div>
        <div>
          <h1 className="RoomHeader1">{data.name}</h1>
        </div>
      <div>
        <h2 className="Description1">
          {data.description}
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
  {data.roomView &&
    data.roomView.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`View ${index}`} className="view" style={{width: '750px',height: '250px', marginRight: '20px'}} />
    ))}
</div>

      <h2 className="features">
        this room comes with state of the art features
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
    </div>
  );
}

export default RoomDetails;
