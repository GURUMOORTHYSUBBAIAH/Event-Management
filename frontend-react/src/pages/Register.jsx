import { useContext, useState, useEffect } from "react";
import { EventContext } from "../context/EventContext";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const { events, registerForEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const eventId = Number(queryParams.get("eventId"));

  const [userData, setUserData] = useState({ name: "", email: "" });
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find((ev) => ev.id === eventId);
    if (!foundEvent) {
      alert("Event not found!");
      navigate("/events");
    } else {
      setEvent(foundEvent);
    }
  }, [eventId, events, navigate]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email) {
      alert("Please fill all fields");
      return;
    }

    registerForEvent(eventId, userData); // save registration

    // navigate to OTP page with email in query
    navigate(`/otp?email=${encodeURIComponent(userData.email)}`);
  };


  if (!event) return null;

  return (
    <div className="admin-container">
      <h2>Register for {event.title}</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={userData.email}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
