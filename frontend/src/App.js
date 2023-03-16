import './App.css';
import Home from './routes/Home'
import Register from './routes/Register'
import Login from './routes/Login'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
