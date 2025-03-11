
import { useState } from "react";
import "./App.css";
import Header from "./assets/header";
import Sidebar from "./assets/sidebar";
import Home from "./assets/home";
import Damage_Reports from "./assets/damage_reports";
import Welcome from "./assets/welcome";
// import Login from "./assets/Login";
// import Register  from "./assets/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header openSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} />
        
        {/* <Login/> 
         <Register/> */}
        <main className="main-content">
          <Routes>
          <Route path="/" element={<Welcome/>} />
             {/* <Route path="/Login" element={<Login />} /> 
             <Route path="/Register" element={<Register />}/> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/damage_reports" element={<Damage_Reports />} />
           
          </Routes>
        </main> 
      </div>
      
    </Router>
   );
}

export default App;




