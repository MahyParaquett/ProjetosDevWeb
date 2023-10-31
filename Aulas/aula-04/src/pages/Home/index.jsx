import { useParams } from "react-router-dom";

export default function Home() {
  const { login } = useParams();
  return (
    <>
      <h1>HOME</h1>
      <h2>Bem-Vindo(a), {login}!!</h2>
    </>
  );
}
