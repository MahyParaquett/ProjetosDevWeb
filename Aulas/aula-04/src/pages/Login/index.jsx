import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  //function entrar(){}
  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      console.log("Preencha os campos de login e senha!");
    } else {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);
      //localStrorage.setItem("info", JSON.stringify(info))
      setLogin("");
      setSenha("");
    }
  };
  return (
    <>
      <h1>Página de login</h1>
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
