function Error({ text }) {
  return (
    <div
      style={{
        border: "2px solid #ff5511",
        borderRadius: "0.4rem",
        width: "70%",
        margin: "0.5rem auto",
        textAlign: "center",
        padding: "0.4rem",
        backgroundColor: "#ffaa99",
      }}
    >
      {text}
    </div>
  );
}

export default Error;
