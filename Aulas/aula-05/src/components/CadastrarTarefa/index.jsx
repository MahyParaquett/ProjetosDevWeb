import { Titulo } from "../styledComponents";

export default function CadastrarTarefa({
  novaTarefa,
  setNovaTarefa,
  cadastrar,
}) {
  return (
    <>
      <Titulo>Cadastre sua tarefa</Titulo>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={cadastrar} className="m-4 btn btn-primary">
        Cadastrar
      </button>
    </>
  );
}
