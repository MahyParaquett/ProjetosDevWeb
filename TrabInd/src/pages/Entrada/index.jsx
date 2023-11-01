import { useNavigate } from "react-router-dom";

export default function Entrada() {
  const navigate = useNavigate();

  function irLogin() {
    navigate("/login");
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <h2>Olá, visitante!!</h2>

      <button onClick={irLogin}>Fazer Login</button>
    </>
  );
}
