import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EventProvider } from "./context/EventContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <EventProvider>
    <App />
  </EventProvider>
</BrowserRouter>

);
