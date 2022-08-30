import "./App.css";
import Header from  './components/Header'
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
