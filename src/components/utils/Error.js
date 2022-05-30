import React from "react";

function Error(text) {
  return (
    <div
      style={{
        border: "2px solid red",
        borderRadius: "0.4rem",
        width: "50%",
        margin: "0.5rem auto",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}

export default Error;
