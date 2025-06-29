// SaveButton.tsx
import React, { useState } from "react";
import "./saveButton.css";

const SaveButton: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  const handleClick = () => {
    if (status === "saving") return;
    setStatus("saving");

    setTimeout(() => {
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    }, 1500);
  };

  return (
    <button
      className={`save-btn ${status}`}
      onClick={handleClick}
      disabled={status === "saving"}
    >
      {status === "idle" && "💾   Save"}
      {status === "saving" && <span className="spinner"></span>}
      {status === "saved" && "✅   Saved"}
    </button>
  );
};

export default SaveButton;
