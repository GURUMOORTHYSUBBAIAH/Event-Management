import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import MotionBackground from "./components/MotionBackground"; // optional
import Background from "./components/Background"; // static image background

function App() {
  return (
    <>
      {/* Background layers */}
      <Background />          {/* static image background */}
      <MotionBackground />    {/* optional motion effect over the image */}

      <Navbar />   {/* Navbar stays on top */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
