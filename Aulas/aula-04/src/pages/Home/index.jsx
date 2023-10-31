import { useParams } from "react-router-dom";

export default function Home() {
  const { user } = useParams();
  return (
    <>
      <h1>HOME</h1>
      {user == undefined ? (
        <h2>Olá, visitante!!</h2>
      ) : (
        <h2>Bem-Vindo(a), {user}!!</h2>
      )}
    </>
  );
}
