import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/Otp.css";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const email = params.get("email");
  const CORRECT_OTP = "123456"; // mock OTP

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp === CORRECT_OTP) {
      // ✅ Redirect to Events page after successful OTP
      navigate("/events");
    } else {
      setError("Invalid OTP ❌");
    }
  };

  return (
    <div className="otp-container">
      <h2 className="otp-heading">OTP Verification</h2>
      <p className="otp-email">
        OTP sent to: <b>{email}</b>
      </p>

      <form onSubmit={handleVerify} className="otp-form">
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          maxLength={6}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>

      {error && <p className="otp-error">{error}</p>}
    </div>
  );
};

export default Otp;
