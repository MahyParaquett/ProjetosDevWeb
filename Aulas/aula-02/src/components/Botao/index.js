//export default function Botao(props) {
export default function Botao({ title, contador }) {
  function mensagem() {
    //console.log("Eu sou o botão" + props.title);
    console.log("Eu sou o botão " + title);
  }
  return (
    <button onClick={mensagem} style={{ marginRight: 10 }}>
      {contador + 1} - {title}
    </button>
  );
}
