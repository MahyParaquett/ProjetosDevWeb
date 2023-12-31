import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Task from "../../components/task";
import CadastrarTarefa from "../../components/CadastrarTarefa";
import { AuthContext } from "../../pages/context/AuthContext";
import api from "../../services/api";

const url = "https://654ab8fb5b38a59f28ee2b8e.mockapi.io/tasklist";

export default function TaskList() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  const { sair } = useContext(AuthContext);

  //Puxando a api put
  const editarTarefa = async (id) => {
    const task = {
      prioridade: "alta",
    };
    try {
      const { data } = await axios.put(`${url}/11`, task);
      const arrayEditado = tarefas.map((item) => {
        if (11 == item.id) {
          return data;
        }
        return item;
      });
      setTarefas(arrayEditado);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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
      const { data } = await api.get("/tasklist");
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
          <div key={item.id}>
            <Task
              item={item}
              excluirTarefa={excluirTarefa}
              editarTarefa={editarTarefa}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
