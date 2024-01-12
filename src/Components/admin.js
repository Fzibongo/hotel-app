import React, { useState, useEffect } from 'react';
import protea from '../Assets/Protea-hotel-group.webp';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function Admin() {
  const [hotels, setHotels] = useState([
    {
      id: '1',
      hotelName: 'Protea Hotel',
      location: 'Kimberley',
      rating: 4.5,
      rooms: 3,
      guest: 2,
      ID: 1234567890,
      roomtype: 'presidential',
      amenities: ['Free Wi-Fi', 'Pool', 'Gym'],
      available: 'available',
      booked: 1,
    },
    // Add more hotel data as needed
  ]);

  const [formData, setFormData] = useState({
    hotelName: '',
    location: '',
    rating: 0,
    rooms: 0,
    guest: 0,
    ID: 0,
    roomtype: '',
    amenities: '',
    available: '',
    booked: 0,
  });

  const [editHotelId, setEditHotelId] = useState(null);
  const [roomType, setRoomType] = useState('single');

  const handleFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (editHotelId) {
      const editedHotel = { ...formData, id: editHotelId };
      const updatedHotels = hotels.map((hotel) =>
        hotel.id === editHotelId ? editedHotel : hotel
      );
      setHotels(updatedHotels);
      setEditHotelId(null);
    } else {
      const newHotel = { ...formData, id: String(Date.now()) };
      setHotels([...hotels, newHotel]);
    }

    // Clear the form data after submission
    setFormData({
      hotelName: '',
      location: '',
      rating: 0,
      rooms: 0,
      guest: 0,
      ID: 0,
      roomtype: '',
      amenities: '',
      available: '',
      booked: 0,
    });
  };

  const handleEditClick = (event, hotel) => {
    event.preventDefault();
    setEditHotelId(hotel.id);
    setFormData(hotel);
  };

  const handleCancelClick = () => {
    setEditHotelId(null);
    setFormData({
      hotelName: '',
      location: '',
      rating: 0,
      rooms: 0,
      guest: 0,
      ID: 0,
      roomtype: '',
      amenities: '',
      available: '',
      booked: 0,
    });
  };

  const handleDeleteClick = (hotelId) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== hotelId);
    setHotels(updatedHotels);
  };

  const handleRoomTypeChange = () => {
    const updatedFormData = { ...formData, roomtype: roomType };
    setFormData(updatedFormData);
  };


  const [details, setDetails] = useState([])

  const fetchRooms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "First"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDetails(newData)
      console.log(newData);
      
    } catch (error) {
      alert('error')
      console.error("Error fetching menu: ", error);
    }
  };


  useEffect(()=>{
    fetchRooms()
  }, [])

  return (
    <div className="admin-page">
      <img src={protea} alt="" className="protea3" />
      <h1 className="page-heading">Admin Page</h1>
      <div className="admin-container">
        <h2 className="section-heading"></h2>
        <form onSubmit={handleFormSubmit}>
          <table>
            <thead>
              <tr>
                {Object.keys(formData).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(formData).map((value, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      name={Object.keys(formData)[index]}
                      value={value}
                      onChange={handleFormChange}
                    />
                  </td>
                ))}
                <td>
                  <button className="update-button" type="submit">
                    {editHotelId ? 'Update Hotel Data' : 'Add Hotel'}
                  </button>
                  {editHotelId && (
                    <button type="button" onClick={handleCancelClick}>
                      Cancel Edit
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <h2>Hotels</h2>
      <table>
        <thead>
          <tr>
            {Object.keys(hotels[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {details.map((details) => (
            <tr key={details.id}>
              {Object.values(details).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              <td>
                <button onClick={(e) => handleEditClick(e, details)}>Edit</button>
                <button onClick={() => handleDeleteClick(details.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
