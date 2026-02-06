import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/Admin.css";

const Admin = () => {
  const { addEvent } = useContext(EventContext);
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    seats: "",
    deadline: "",
  });

  const handleChange = (e) =>
    setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    alert("Event Created ✅");
    setEvent({ title: "", date: "", time: "", seats: "", deadline: "" });
  };

  return (
    <div className="admin-container">
      <h2>Create New Event</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          required
        />
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
        <input type="time" name="time" value={event.time} onChange={handleChange} required />
        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={event.seats}
          onChange={handleChange}
          required
        />
        <input type="date" name="deadline" value={event.deadline} onChange={handleChange} required />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default Admin;
