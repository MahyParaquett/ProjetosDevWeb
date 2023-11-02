export default function CadastrarTarefa({
  novaTarefa,
  setNovaTarefa,
  cadastrar,
}) {
  return (
    <>
      <h2>Cadastre sua tarefa</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastrar</button>
    </>
  );
}
