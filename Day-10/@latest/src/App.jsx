import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const isAuthenticated = true; // Simulate login

function App() {
  // Performance API for measuring
  useEffect(() => {
    performance.mark("start-computation");

    // Simulate heavy computation
    for (let i = 0; i < 100000000; i++) {}

    performance.mark("end-computation");
    performance.measure(
      "computation",
      "start-computation",
      "end-computation"
    );
    const [entry] = performance.getEntriesByName("computation");
    console.log(`Heavy computation took ${entry.duration.toFixed(2)}ms`);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
