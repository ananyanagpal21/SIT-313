import React, { useState } from "react";
import "./Newsletter.css"; // import CSS

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}`);
        setEmail("");
      } else {
        setMessage(`❌ Subscription failed: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      setMessage("⚠️ Error connecting to server.");
      console.error("Frontend error:", error);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <h2 className="newsletter-title">Sign Up for Our Daily Insider</h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </div>
  );
}
