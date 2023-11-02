export default function Task({ item, excluirTarefa }) {
  return (
    <div>
      <h3>{item.titulo}</h3>
      <p>{item.descricao}</p>
      <p>{item.prioridade}</p>
      <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
    </div>
  );
}
