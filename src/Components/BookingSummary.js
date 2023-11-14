import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

function BookingSummary() {

  const location = useLocation();
  const data = location.state;
  console.log(data)
 
  return (
    <div>
        <h2 className="Summary">Booking Summary</h2>
        <div className="border">
            <h2 className="date">Date check</h2>
        <input
                        className='check-in'
                        type="check-in"
                        placeholder="Enter date"
                        

                    />
                    
                     <input
                     
                        className='check-in'
                        type="check-in"
                        placeholder="Enter date"

                    />
                     <input
                        className='check-in'
                        type="check-in"
                        placeholder="Enter number"

                    />
                     <input
                        className='check-in'
                        type="check-in"
                        placeholder="Total"

                    />
        </div>
    </div>
  );
}

export default BookingSummary;