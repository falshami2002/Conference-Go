import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
