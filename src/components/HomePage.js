import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login"); // Ensure this matches the Login route
  };

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        background: "linear-gradient(to right, #6a11cb, #2575fc)", // Background gradient
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Log In Button */}
      <button
        onClick={handleSignInClick}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#ffffff",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Log In
      </button>

      {/* Heading */}
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome to Find and Fix</h1>
      <p style={{ fontSize: "1.5rem", marginTop: "20px", maxWidth: "600px", textAlign: "center" }}>
        "Solutions made simple."
      </p>
    </div>
  );
};

export default HomePage;
