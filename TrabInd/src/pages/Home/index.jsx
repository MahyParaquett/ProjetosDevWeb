import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Home() {
  const { user } = useParams();
  const navigate = useNavigate();

  function irTarefas() {
    navigate(`/tasklist/${user}`);
  }

  return (
    <>
      <Navbar user={user} />
      <h1>TO DO LIST</h1>
      <h2>Bem-Vindo(a), {user}!!</h2>

      <button onClick={irTarefas}>Tarefas</button>
    </>
  );
}
