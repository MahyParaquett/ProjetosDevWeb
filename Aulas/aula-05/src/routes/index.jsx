import { Routes, Route, Navigate } from "react-router-dom";
import TaskList from "../pages/TaskList";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../pages/context/AuthContext";

const RotasPublicas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const RotasPrivadas = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const Rotas = () => {
  const { estaLogado } = useContext(AuthContext);
  return <>{estaLogado ? <RotasPrivadas /> : <RotasPublicas />}</>;
};

export default Rotas;
