import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [nome, setNome] = useState(" ");

  const [email, setEmail] = useState("");

  const [idade, setIdade] = useState("");

  const prova = () => {
    console.log("Eu sou a função de prova!");
    setCount((prevState) => prevState + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setNome("Alterei o nome na tela");
  };

  const cadstrar = () => {
    const infos = {
      nome: nome,
      email: email,
      idade: idade,
    };
    console.log(infos);
    setNome("");
    setEmail("");
    setIdade("");

    localStorage.setItem("info", JSON.stringify(infos));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{nome}</h1>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>

      <div className="card">
        <button onClick={cadstrar}>Cadastrar</button>
      </div>

      <div className="card">
        <button onClick={() => prova()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
