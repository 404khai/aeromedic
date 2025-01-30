import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react";

const AppRouter = () => {
  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route
          path="/Home" 
          index element={<Home/>}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
