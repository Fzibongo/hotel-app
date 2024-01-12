import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignUp from "./Components/signUp"
import Login from "./Components/login"
import Home from './Components/home'
import aboutUs from './Components/aboutUs'
import ForgotPassword from './Components/forgotPassword'
import Admin from './Components/admin'
import RoomDetails from './Components/RoomDetails'
import Icons from './Components/Icons'
import Booking from './Components/Booking'
import ProfilePage from './Components/Profile'
import SavedInfoPage from './Components/SavedInfoPage';
import BookingConfirm from './Components/BookingConfirmation'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="aboutUs" element={<aboutUs />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="admin" element={<Admin />} />
        <Route path="RoomDetails" element={<RoomDetails />} />
        <Route path="Icons" element={<Icons />} />
        <Route path="booking" element={<Booking />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="saved-info" element={<SavedInfoPage />} />
        <Route path="Booking-confirm" element={<BookingConfirm />} />
      </Routes>
    </div>
  )
}

export default App;
