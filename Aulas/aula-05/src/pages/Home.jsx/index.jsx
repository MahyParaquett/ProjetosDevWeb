import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../../../../TrabInd/src/components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1>HOME</h1>
      <h2>Olá, visitante!!</h2>
      <button onClick={() => navigate(`/tasklist`)}>Ir para tarefas</button>
    </>
  );
}
