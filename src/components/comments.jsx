import React, { useState } from "react";

const reactions = [
  { emoji: "👍", label: "Like" },
  { emoji: "❤️", label: "Love" },
  { emoji: "😂", label: "Haha" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😢", label: "Sad" },
];

export default function Comments({ comments }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: "20px",
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      {comments.map((c) => (
        <CommentCard key={c.id} comment={c} />
      ))}
    </div>
  );
}

function CommentCard({ comment }) {
  const [selectedReaction, setSelectedReaction] = useState(null);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span style={{ fontWeight: 600 }}>{comment.author}</span>
        <span style={{ color: "#666", fontSize: 12 }}>{comment.date}</span>
      </div>
      <p style={{ marginBottom: 16, color: "#000" }}>{comment.text}</p>
      <div style={{ display: "flex", gap: 10 }}>
        {reactions.map(({ emoji, label }) => (
          <button
            key={label}
            onClick={() =>
              setSelectedReaction(selectedReaction === label ? null : label)
            }
            style={{
              fontSize: 22,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border:
                selectedReaction === label
                  ? "2px solid #ff4081"
                  : "2px solid transparent",
              background:
                selectedReaction === label ? "#ffe4f0" : "#f0f0f0",
              cursor: "pointer",
            }}
            aria-label={label}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
