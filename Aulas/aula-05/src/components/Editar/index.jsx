const Editar = ({ editar, novaTarefa, setNovaTarefa, item }) => {
  return (
    <>
      <h2>Modificar Tarefa</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={() => editar(item.id)}>Modificar</button>
      <button onClick={() => navigate(`/tasklist`)}>Voltar para tarefas</button>
    </>
  );
};

export default Editar;
