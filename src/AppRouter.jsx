import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Navbar from "./components/Navbar/Navbar"
import UserLogin from './pages/UserLogin/UserLogin'
import UserSignUp from './pages/UserSignUp/UserSignUp'
import Deliveries from "./pages/Deliveries/Deliveries";
import EvtolBooking from "./pages/EvtolBooking/EvtolBooking";

const AppRouter = () => {
  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" index element={<Home/>} />
        <Route path="/Deliveries" element={<Deliveries />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/EvtolBooking" element={<EvtolBooking />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignUp" element={<UserSignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
