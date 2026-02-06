import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "React Workshop",
      date: "2026-02-15",
      time: "10:00 AM",
      seats: 20,
      deadline: "2026-02-12",
      registrations: [],
    },
    {
      id: 2,
      title: "JavaScript Bootcamp",
      date: "2026-02-20",
      time: "2:00 PM",
      seats: 15,
      deadline: "2026-02-18",
      registrations: [],
    },
  ]);

  const addEvent = (event) => {
    const newEvent = { ...event, id: Date.now(), registrations: [] };
    setEvents((prev) => [...prev, newEvent]);
  };

  const registerForEvent = (eventId, userData) => {
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === eventId
          ? {
              ...ev,
              seats: ev.seats - 1,
              registrations: [...ev.registrations, userData],
            }
          : ev
      )
    );
  };

  return (
    <EventContext.Provider value={{ events, addEvent, registerForEvent }}>
      {children}
    </EventContext.Provider>
  );
};
