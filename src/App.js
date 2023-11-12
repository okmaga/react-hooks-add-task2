import { useToggle } from "./useToggle";

function App() {
  const [color, colorToggle] = useToggle(["blue", "orange", "cyan", "teal"]);
  const [bool, boolToggle] = useToggle();
  const [theme, themeToggle] = useToggle(["dark", "light"]);

  const buttonStyle = {
    backgroundColor: "#eee",
    width: "70%",
    height: "80px",
    fontSize: "1.5rem",
    borderRadius: "10px",
    border: "none",
    marginBottom: "2rem ",
    display: "block",
    cursor: "pointer"
  };

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#3b3b3b" : "white",
        color: theme === "dark" ? "white" : "#3b3b3b",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button style={buttonStyle} onClick={() => colorToggle()}>
        <div
          style={{
            height: "30px",
            width: "30px",
            backgroundColor: color,
            display: "inline-block"
          }}
        ></div>
        {color}
      </button>
      <button style={buttonStyle} onClick={() => boolToggle()}>
        bollean toggle, current state: {bool.toString()}
      </button>
      <button style={buttonStyle} onClick={() => boolToggle(false)}>
        set to false
      </button>
      <button style={buttonStyle} onClick={() => themeToggle()}>
        theme toggle, current theme: {theme}
      </button>
      <button style={buttonStyle} onClick={() => themeToggle("dark")}>
        set dark theme
      </button>
    </div>
  );
}

export default App;
