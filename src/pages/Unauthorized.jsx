function Unauthorized() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f8d7da", // light red
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>403 - Unauthorized</h1>
      <p>You are not allowed to access this page</p>
    </div>
  );
}

export default Unauthorized;