import { useState } from "react";

export default function TaskList() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const [tarefas, setTarefas] = useState([]);

  const cadastrar = () => {
    if (novaTarefa == "") {
      console.log("Preencha a tarefa antes de salvar!");
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
      <h1>Lista de Tarefas</h1>
      <section>
        <h2>Cadastre sua tarefa</h2>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={cadastrar}>✓</button>
      </section>
      <section>
        <h2>Lista de tarefas</h2>
        {/*Exibir o array que ta salvando as tarefas*/}
        {/*O index é a posição da string que esta se passando de id*/}
        {tarefas.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <button onClick={() => excluirTarefa(index)}>Excluir</button>
          </div>
        ))}
      </section>
    </main>
  );
}
