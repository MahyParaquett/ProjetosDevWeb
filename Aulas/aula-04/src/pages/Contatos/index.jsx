import { useNavigate } from "react-router-dom";

export default function Contato() {
  const navigate = useNavigate();
  const parametro = "eu sou um parametro";

  const handleClick = () => {
    navigate("/login/" + parametro, {
      state: "eu sou uma informacao que nao aparece na url",
    });
  };

  return (
    <>
      <h1>Contatos</h1>
      <button onClick={handleClick}>Click aqui</button>
    </>
  );
}
