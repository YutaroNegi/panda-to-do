import "./App.css";
import Header from  './components/Header'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home'
import OpenList from './components/OpenList'
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
        <Route path="/home" element={<Home/>}/>
        <Route path="/list/:listId" element={<OpenList/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
