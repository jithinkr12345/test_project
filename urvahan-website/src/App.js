import Layout from "./components/Layout/Layout";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
         </div>
        
         
      
  );
}

export default App;
