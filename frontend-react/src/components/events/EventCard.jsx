import "../../styles/EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Seats:</strong> {event.seats}</p>
      <p><strong>Deadline:</strong> {event.deadline}</p>
      <button>Register</button>
    </div>
  );
};

export default EventCard;
