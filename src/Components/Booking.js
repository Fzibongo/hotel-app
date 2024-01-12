// BookingSummary.jsx

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

import { auth } from "../config/firebase";

function Booking() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const navigate = useNavigate()

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomType, setRoomType] = useState("single"); // Default room type
  const [weekOption, setWeekOption] = useState(false);
  const [dayOption, setDayOption] = useState(false);
  const [availability, setAvailability] = useState(false); // Default is sold out
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const user = auth.currentUser;

  const handleBooking = async () => {
    try {
      const currentUser = auth.currentUser;
  
      if (!currentUser) {
        console.error("User not authenticated");
        return;
      }
  
      const cartCollectionRef = collection(db, "Cart");
  
      const docRef = await addDoc(cartCollectionRef, {
        userId: currentUser.uid,
        checkInDate,
        checkOutDate,
        roomType,
        weekOption,
        dayOption,
        numberOfGuests,
        email,
        address,
        phoneNumber,
      });
    
      
      
      navigate('/Booking-confirm')
      alert("Thank you for booking with us!");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      alert("Error during booking. Please try again.");
      console.error("Error adding document: ", error);
    }
  };
  
  return (
    <div className="app-container">
  
      <h2 className="Summary">Booking</h2>

      {/* Main Border */}
      <div className="border">
        <div className="section">
          <h3 className="section-heading">Check-In Date</h3>
          <DatePicker
            className="check-in"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Select check-in date"
          />
        </div>

        <div className="section">
          <h3 className="section-heading">Check-Out Date</h3>
          <DatePicker
            className="check-in"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Select check-out date"
          />
        </div>

        <div className="section">
          <h3 className="section-heading">No. Of Guests</h3>
          <input
            className="check-in"
            type="text"
            placeholder="Enter number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>

        <div className="section">
          <h3 className="section-heading">Email</h3>
          <input
            className="check-in"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="section">
          <h3 className="section-heading">Address</h3>
          <input
            className="check-in"
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="section">
          <h3 className="section-heading">Phone Number</h3>
          <input
            className="check-in"
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
           />
        </div>
      </div>
      {/* End Main Border */}

      {/* Separate Border for Room Type and Availability Sections */}
      <div className="border room-type-border">
        <div className="section">
          <h3 className="section-heading">Room Type</h3>
          <select
            className="room-type"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="presidential">Presidential</option>
            <option value="family">Family</option>
            <option value="king">King</option>
            <option value="queen">Queen</option>
            {/* Add more room type options */}
          </select>
        </div>

        <div className="section">
          <h3 className="section-heading">Options</h3>
          <label>
            <input
              type="checkbox"
              checked={weekOption}
              onChange={() => setWeekOption(!weekOption)}
            />
            Week Option
          </label>
          <label>
            <input
              type="checkbox"
              checked={dayOption}
              onChange={() => setDayOption(!dayOption)}
            />
            Day Option
          </label>
        </div>

        <div className="section">
          <h3 className="section-heading">Availability</h3>
          <label>
            <input
              type="checkbox"
              checked={availability}
              onChange={() => setAvailability(!availability)}
            />
            Room Available
          </label>
        </div>
      </div>
      <div>
        <button onClick={handleBooking} style={{width: "80px", height: "80px"}}> Comfirm booking</button>
      </div>
    </div>
  );
}

export default Booking;
