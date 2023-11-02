import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../../components/task";
import CadastrarTarefa from "../../components/CadastrarTarefa";

const url = "https://6542cd3301b5e279de1f982d.mockapi.io/tasklist";

export default function TaskList() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  //Puxando a api post
  const cadastrar = async () => {
    const task = {
      titulo: novaTarefa,
      descricao: "descricao",
      prioridade: "alta",
      done: false,
    };
    try {
      const { data } = await axios.post(url, task);
      console.log(data);
      setTarefas([...tarefas, data]);
      //console.log([...tarefas,novaTarefa]); FORMA ANTIGA
      setNovaTarefa("");
    } catch (err) {
      console.log(err);
    }
  };

  //Puxando a api delete
  const excluirTarefa = async (id) => {
    console.log("excluir tarefa", id);
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
      const novoArray = tarefas.filter((item) => item.id != id);
      setTarefas(novoArray);
      {
        /*Se o numero que foi passado é igual o do array ja existente ele não entra no novo array.
        Se for != ele vai estar no vovo array*/
      }
      //console.log(novoArray);
    } catch (err) {
      console.log(err);
    }
  };

  //Puxando a api get
  const getTasks = async () => {
    try {
      //const dados = await fetch(
      //   "https://6542c27001b5e279de1f8a8c.mockapi.io/tasklist"
      // );
      // const infos = await dados.json();
      const { data } = await axios.get(url);
      console.log(data);
      setTarefas(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  //É executado logo apos a montagem do componente na tela
  // useEffect(()=>{} , []) --> tem uma função e um array
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <button onClick={getTasks} disabled={loading}>
        Get tasks
      </button>
      <section>
        <CadastrarTarefa
          novaTarefa={novaTarefa}
          setNovaTarefa={setNovaTarefa}
          cadastrar={cadastrar}
        />
      </section>
      <section>
        <h2>Lista de tarefas</h2>
        {/*Exibir o array que ta salvando as tarefas*/}
        {/*O index é a posição da string que esta se passando de id*/}
        {tarefas.map((item) => (
          <Task key={item.id} item={item} excluirTarefa={excluirTarefa} />
        ))}
      </section>
    </main>
  );
}
