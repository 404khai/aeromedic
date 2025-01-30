import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Meds from "./pages/Deliveries/Deliveries";
import Book from "./pages/Book/Book";
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react";
import Deliveries from "./pages/Deliveries/Deliveries";

const AppRouter = () => {
  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" index element={<Home/>} />
        <Route path="/Deliveries" element={<Deliveries />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
