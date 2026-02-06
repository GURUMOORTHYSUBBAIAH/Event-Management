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
    registerUrl: "", // new optional URL field
  });

  const handleChange = (e) =>
    setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert seats to number
    const newEvent = { ...event, seats: Number(event.seats) };

    addEvent(newEvent);
    alert("Event Created ✅");

    // Reset form
    setEvent({
      title: "",
      date: "",
      time: "",
      seats: "",
      deadline: "",
      registerUrl: "",
    });
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
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={event.seats}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="deadline"
          value={event.deadline}
          onChange={handleChange}
          required
        />
        {/* Optional Register URL */}
        <input
          type="text"
          name="registerUrl"
          placeholder="Optional External Register URL"
          value={event.registerUrl}
          onChange={handleChange}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default Admin;
