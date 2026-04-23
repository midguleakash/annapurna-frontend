function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist</p>

      <a href="/" style={{ marginTop: "20px", color: "blue" }}>
        Go to Home
      </a>
    </div>
  );
}

export default NotFound;