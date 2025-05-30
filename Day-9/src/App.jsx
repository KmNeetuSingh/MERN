 import React, { useReducer, useEffect } from "react";

// Assign 1 : use window
function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// 2. ThemeContext
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "Dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme} style={{ padding: "1rem", minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return React.useContext(ThemeContext);
}

// 4. useReducer example: counter
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 3. Data fetching with cleanup in useEffect
function DataFetcher({ url }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      if (isMounted) {
        setData(json);
        setLoading(false);
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (loading) return <p>Loading data...</p>;
  return (
    <pre style={{ maxHeight: "150px", overflow: "auto" }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

// --------------- FIXED APP COMPONENT ----------------
export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const size = useWindowSize();
  const { theme, toggleTheme } = useTheme();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1>React Combined Hooks Example</h1>

      {/* Window Size */}
      <p>
        Window Size: {size.width} x {size.height}
      </p>

      {/* Theme toggle */}
      <p>
        Current theme: <b>{theme}</b>
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* useReducer counter */}
      <div style={{ marginTop: "1rem" }}>
        <h3>Counter: {state.count}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>

      {/* Fetch data */}
      <div style={{ marginTop: "1rem" }}>
        <h3>Data Fetcher (example: JSONPlaceholder posts)</h3>
        <DataFetcher url="https://jsonplaceholder.typicode.com/posts/1" />
      </div>
    </div>
  );
}
