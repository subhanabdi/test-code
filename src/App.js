import logo from './logo.svg';
import './App.css';
import Login from "./Component/Login"
import Register from "./Component/Register"
import Dashboard from "./Component/Dashboard"
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Careers  from "./page/Careers"
import Features  from "./page/Features"
import  Home  from "./page/Home"
import  Pricing from "./page/Pricing"


function App() {
  return (
    <div className="App">

      
      
      <Router basename="/test-code">
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 

          <Route path="/dashboard" element={<Dashboard />} /> 

          <Route path="/Home" element={<Home/>} /> 
          <Route path="/Pricing" element={<Pricing/>} /> 
          <Route path="/Features" element={<Features/>} /> 
          <Route path="/Careers" element={<Careers/>} /> 

          {/* Other routes */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
