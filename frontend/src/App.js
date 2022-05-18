import logo from './logo.svg';

import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Goals from './pages/Goals';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </div>
  );
}

export default App;
