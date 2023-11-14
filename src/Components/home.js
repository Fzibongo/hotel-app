import { Link } from "react-router-dom";
import logo from '../Assets/desktop2img.png.webp';
import entrence from '../Assets/40004863.jpg'
import presidential from '../Assets/Elegance-Suite-b1png.jpg'
import family from '../Assets/pasted image 02.png'
import single from '../Assets/standardroom2.jpg'
import wifi from '../Assets/icons8-wi-fi-50.png'
import massage from '../Assets/icons8-massage-50.png'
import pool from '../Assets/icons8-lap-pool-50 (1).png'
import gym from '../Assets/icons8-gym-50.png'
import restaurant from '../Assets/icons8-restaurant-50.png'
import bar from '../Assets/icons8-bar-counter-30.png'
import sauna from '../Assets/icons8-sauna-50.png'
import kitchen from '../Assets/icons8-kitchen-room-50.png'
import instagram from '../Assets/download.jpg'
import whatsapp from '../Assets/images (7).jpg'
import facebook from '../Assets/images.png'
import twitter from '../Assets/icons8-twitter-48.png'
import { collection, getDocs } from "firebase/firestore";
import {useEffect, useState} from 'react'
import {db} from '../config/firebase'
import Room from "./RoomDetails";
import {useNavigate} from "react-router-dom"


function Home() {

const [Rooms, setRooms]=useState([]) ;

const navigate = useNavigate()



  const fetchRooms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "First"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  setRooms(newData)
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
    <div>

      <h1 className="welcome">Welcome To Protea Hotel Your One Stop Holiday Destination</h1>
      <img src={logo} alt="" style={{ marginTop: '-130px', width: '1930px', height: '601px' }} />
      <div className="Explore">
        <img src={entrence} alt="" className="entrence" />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="vast">EXPLORE OUR VAST SUITES TO YOUR COMFORTABILITY</h2>
          <br></br>
          <h2 className="breath">For breathtaking views, state of the art conferencing facilities, and a historical elegance in the heart of historical Kimberley, look no further than Protea Hotel by Marriott Kimberley. Situated right on the edge of the famous Big Hole, this hotel is the ideal base from which to explore and enjoy all that Kimberley has to offer, including museums, war routes, and the Mining Village. This hotel offers all the modern comforts one would expect from a luxury four-star hotel. Still, it incorporates vintage decor with a warm ambiance that complements the history of its setting. Whether you’re a business or leisure traveler, Protea Hotel Kimberley will ensure that you have a comfortable stay with everything you need. Our rooms are all en-suite, with a choice between standard, deluxe, executive, and suite.</h2></div>
      </div>
      <div>
        <h2 className="Accom">ACCOMODATION OPTIONS</h2>
      </div>
      <div style={{flexDirection: 'row', display: 'flex'}}>


        {Rooms.map((data)=>(
          <div   onClick={() => navigate("/RoomDetails", {state: data})}>
         
            <img src={data.Image} alt="" className="room1" />
            <h2 className="presidential">{data.name}</h2>
            <h2 className="presidentialText"> </h2>
            
          
        </div>
        ))}
        
       
       
      </div>
      <div>
        <h2 className="facilities">we offer  state of the art facilities</h2>
        <div className="border">
          <img src={wifi} alt="" className="wifi"/>
          <img src={massage} alt="" className="massage"/>
          <img src={pool} alt="" className="pool"/>
          <img src={gym} alt="" className="gym"/>
          <img src={restaurant} alt="" className="restaurant"/>
          <img src={bar} alt="" className="bar"/>
          <img src={sauna} alt="" className="sauna"/>
          <img src={kitchen} alt="" className="kitchen"/>
        </div>
      </div>
      <div>
        <h2 className="socialText">find us in one of our social pages</h2>
        <div className="boder2">
          <img src={instagram} alt="" className="instagram"/>
          <img src={whatsapp} alt="" className="whatsapp"/>
          <img src={facebook} alt="" className="facebook"/>
          <img src={twitter} alt="" className="twitter"/>
        </div>
      </div>
      

      <Link to="/aboutUs">Click to view our about page</Link>
      <Link to="/home">Click to view our home page</Link>
      <Link to="/login">Click to view our login page</Link>
    </div>
  );
}

export default Home;