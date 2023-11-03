import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.css";

export default function TaskList() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const [tarefas, setTarefas] = useState([]);

  const { user } = useParams();

  const cadastrar = () => {
    if (novaTarefa == "") {
      alert("Preencha a tarefa antes de salvar!");
    } else {
      setTarefas([...tarefas, novaTarefa]);
      console.log([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const excluirTarefa = (ind) => {
    console.log("excluir tarefa", ind);
    const novoArray = tarefas.filter((item, index) => index != ind);
    {
      /*Se o numero que foi passado é igual o do array ja existente ele não entra no novo array.
      Se for != ele vai estar no vovo array*/
    }
    //console.log(novoArray);
    setTarefas(novoArray);
  };
  return (
    <main>
      <Navbar user={user} />
      <h1>TO DO LIST</h1>
      <section>
        <h2>Cadastre sua tarefa</h2>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button className="check" onClick={cadastrar}>
          ✓
        </button>
      </section>
      <section>
        <h2>Tarefas a fazer:</h2>
        {/*Exibir o array que ta salvando as tarefas*/}
        {/*O index é a posição da string que esta se passando de id*/}
        {tarefas.map((item, index) => (
          <div key={index} className="tarefa">
            <h3>{item}</h3>
            <button
              className="botaoExcluir"
              onClick={() => excluirTarefa(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 15 15"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
