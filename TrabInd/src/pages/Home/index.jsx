import { useParams, useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useParams();
  const navigate = useNavigate();

  function irTarefas() {
    navigate("/tasklist");
  }

  return (
    <>
      <h1>HOME</h1>
      <h2>Bem-Vindo(a), {user}!!</h2>

      <button onClick={irTarefas}>Tarefas</button>
    </>
  );
}
