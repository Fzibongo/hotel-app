
import './App.css'
import { Routes, Route } from "react-router-dom"
import SignUp from "./Components/signUp"
import Login from "./Components/login"
import Home from './Components/home'
import aboutUs from './Components/aboutUs'
import ForgotPassword from './Components/forgotPassword'
import Admin from './Components/admin'
import Bookings from './Components/Bookings'
import Room from './Components/RoomDetails'
import RoomDetails from './Components/RoomDetails'
import Icons from './Components/Icons'
import BookingSummary from './Components/BookingSummary'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={ <Home/> } />
        <Route path="/" element={ <SignUp/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="aboutUs" element={ <aboutUs/> } />
        <Route path="forgot" element={ <ForgotPassword/> } />
        <Route path="admin" element={ <Admin/> } />
        <Route path="bookings" element={ <Bookings/> } />
        <Route path="RoomDetails" element={ <RoomDetails/> } />
        <Route path="Icons" element={ <Icons/> } />
        <Route path="BookingSummary" element={ <BookingSummary/> } />

      </Routes>
    </div>
  )
}

export default App