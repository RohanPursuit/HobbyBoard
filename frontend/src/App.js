import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";

function App() {
  const [res, setRes] = useState("Loading...");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const testQuery = async () => {
      const response = await axios.get(URL);
      setRes(response.data);
    };

    testQuery();
  }, [URL]);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Here is our database call = {res}</p>
              </header>
            }
          />
          <Route path='/projects' element={<AllProjects/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
