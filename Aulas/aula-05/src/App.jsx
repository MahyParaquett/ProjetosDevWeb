import "./App.css";
import { Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import Home from "./pages/Home.jsx/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasklist" element={<TaskList />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App;
