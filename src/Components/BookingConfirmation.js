import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

function BookingConfirm() {
  const location = useLocation();
  const { bookingId } = location.state;
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const bookingDocRef = doc(db, "Cart", bookingId);
        const bookingSnapshot = await getDoc(bookingDocRef);

        if (bookingSnapshot.exists()) {
          setBookingDetails(bookingSnapshot.data());
        } else {
          console.error("Booking document not found");
        }
      } catch (error) {
        console.error("Error fetching booking details: ", error);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (!bookingDetails) {
    return <p>Loading...</p>; // Add a loading state if needed
  }
  return (
    <div className="app-container">
      <h2 className="luxurious-summary">Booking Confirmation</h2>
      <div className="luxurious-confirmation-details" style={{backgroundColor: "rgba(255, 255, 255, 0.5)", padding: '20px'}}
>
        <h3>Thank you for your booking!</h3>
        <p>Booking Details:</p>
        <pre>{JSON.stringify(bookingDetails, null, 2)}</pre>
      </div>
    </div>
  );
};

export default BookingConfirm;
