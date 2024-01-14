import "./App.css";
import Navbar from "./Components/Navigation/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Suspense, lazy } from "react";
const About = lazy(() => import("./Components/About/About.jsx"));
const Contact = lazy(() => import("./Components/Contact/Contact.jsx"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={"<h1>Loading......</h1>"}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={"<h1>Loading......</h1>"}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
