import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthState from "../Context API/AuthState";
function App() {
  return (
    <AuthState>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </AuthState>
  );
}

export default App;
