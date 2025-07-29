import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{
      height: "calc(100vh - 20px)",
      width: "calc(100vw - 20px)",
      margin: "10px",
      borderRadius: "32px",
      overflow: "hidden",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Segoe UI, Tahoma, Verdana",
      color: "white",
      textAlign: "center",
      padding: 20,
      boxSizing: "border-box"
    }}>
      <h1 style={{
        fontSize: 48,
        fontWeight: 900,
        marginBottom: 40,
        textShadow: "0 2px 6px rgba(0,0,0,0.3)"
      }}>
        Welcome to Tawsif Abir's Daily Feed
      </h1>
      <Link to="/profile" style={{
        background: "white",
        color: "#764ba2",
        padding: "16px 32px",
        borderRadius: 16,
        fontSize: 24,
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        cursor: "pointer"
      }}>
        Author Name
      </Link>
    </div>
  );
}
