import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">EventApp</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
