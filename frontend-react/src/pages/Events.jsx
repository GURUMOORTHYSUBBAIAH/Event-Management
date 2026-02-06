import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import "../styles/Events.css";

const Events = () => {
  const { events } = useContext(EventContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="heading">🎉 Upcoming Events</h1>

      {events.length === 0 ? (
        <p className="no-events">No events available 😔</p>
      ) : (
        <div className="card-container">
          {events.map((event) => (
            <div key={event.id} className="card">
              <h2 className="event-title">{event.title}</h2>
              <p>
                <strong>Date:</strong> {event.date} at {event.time}
              </p>
              <p>
                <strong>Seats:</strong> {event.seats}
              </p>
              <p>
                <strong>Deadline:</strong> {event.deadline}
              </p>

              <button
                className="button"
                onClick={() => {
                  if (event.registerUrl) {
                    // If admin has provided a URL, open it
                    window.open(event.registerUrl, "_blank");
                  } else {
                    // Default route for your app
                    navigate(`/register?eventId=${event.id}`);
                  }
                }}
                disabled={event.seats === 0}
              >
                {event.seats === 0 ? "Full" : "Register"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
