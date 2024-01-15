
import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from './components/TextForm';
import Alertbox from './components/Alertbox';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const toggleMode = () => {
   if(mode === "light"){
     setMode("dark");
     document.body.style.backgroundColor ="#30302d";
     showAlert("You have enabled dark mode","success");
   }
  else {
    setMode("light");
    document.body.style.backgroundColor ="white";
    showAlert("You have enabled light mode", "success");
  }
   
  }
  const showAlert =(message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert("null");
    }, 1500
    );
  }
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState("null");
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alertbox alert={alert} /> 

    <div className="container my-3">
    
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About  mode={mode}/>} />  
   </Routes>
    </div>
  </Router>
  </> 
  );
}
export default App;
