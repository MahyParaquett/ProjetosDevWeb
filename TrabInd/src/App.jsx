import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import Entrada from "./pages/Entrada";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Entrada />} />
      <Route path="/home/:user" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasklist" element={<TaskList />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App;
