import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  //function entrar(){}
  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      alert("Preencha os campos de login e senha!");
    } else if (login == "mahyara" && senha == "1234") {
      const info = {
        login: login,
        senha: senha,
      };

      console.log(info);
      //localStrorage.setItem("info", JSON.stringify(info))
      setLogin("");
      setSenha("");

      //levando pra home
      navigate(`/home/${login}`);
      //navigate("/home/"+login) é a mesma coisa que o anterior
    } else {
      alert("Login ou Senha não identificados!");
    }
  };
  return (
    <>
      <h1>login</h1>
      <form>
        <input
          type="text"
          placeholder="Digite seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="button" onClick={entrar}>
          Entrar
        </button>
      </form>
    </>
  );
}
