import { useState, useContext } from "react";
import { AuthContext } from "../../pages/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const { logar } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    logar(login, senha);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Faça seu login</h1>
      <input
        type="text"
        placeholder="Insira seu login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Insira sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />

      <button>Entrar</button>
    </form>
  );
};

export default Login;
