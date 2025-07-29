import React from "react";
import { Link } from "react-router-dom";
import Comments from "../components/comments";
import CommentsData from "../data/comments";

export default function Profile() {
  return (
    <div style={{
      minHeight: "calc(100vh - 20px)",
      width: "calc(100vw - 20px)",
      margin: "10px",
      borderRadius: "32px",
      overflow: "hidden",
      background: "linear-gradient(135deg, #f093fb, #f5576c)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Segoe UI, Tahoma, Verdana",
      padding: 20,
      boxSizing: "border-box"
    }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Link to="/" style={{
          color: "white", fontSize: 18, fontWeight: 700,
          marginBottom: 20, textDecoration: "none", cursor: "pointer",
          width: 100, display: "block"
        }}>← Back</Link>

        <h1 style={{
          fontSize: 48, fontWeight: 900, marginBottom: 16,
          textShadow: "0 2px 6px rgba(0,0,0,0.3)"
        }}>Tawsif Abir</h1>

        <div style={{
          background: "rgba(255,255,255,0.3)",
          borderRadius: 16,
          padding: 24,
          maxWidth: 600,
          width: "100%",
          color: "#000",
          marginBottom: 30,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ margin: 0, fontWeight: 700, marginBottom: 12 }}>Profile Info</h2>
          <p>Email: tawsif.cse.20230104035@aust.edu</p>
          <p>Contact Number: 01726793261</p>
          <p>Address: Green View Road‑1, House‑08, Turag City, Mirpur‑1, Dhaka‑1216</p>
          <p>Bio: Be happy and spread happiness!</p>
        </div>

        {/* Status bars removed */}

        <h2 style={{
          marginBottom: 16, fontSize: 32, fontWeight: 700,
          color: "white", textShadow: "0 2px 6px rgba(0,0,0,0.4)"
        }}>Personal Posts</h2>
        <Comments comments={CommentsData.personal} />
      </div>
    </div>
  );
}
