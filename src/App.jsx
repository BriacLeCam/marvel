import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState(Cookies.get("marvel-token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("marvel-token", token, { expires: 90 });
      setToken(token);
    } else {
      Cookies.remove("marvel-token");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
