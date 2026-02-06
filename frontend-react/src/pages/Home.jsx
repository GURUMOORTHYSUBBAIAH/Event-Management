import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🎉 Welcome to EventApp</h1>
          <p className="hero-subtitle">
            Discover amazing events and join the fun near you!
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/events")}>Explore Events</button>
            <button onClick={() => navigate("/register")}>Register Now</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="features-section">
        <h2>Why Choose EventApp?</h2>
        <div class="features-cards">
          <div class="card">
            <h3>Easy Registration</h3>
            <p>Sign up for events quickly and effortlessly.</p>
          </div>
          <div class="card">
            <h3>Track Your Events</h3>
            <p>See all upcoming events and deadlines in one place.</p>
          </div>
          <div class="card">
            <h3>Admin Friendly</h3>
            <p>Create and manage events with ease.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
