import "./App.css";
import Bio from "./components/Bio";
import Botao from "./components/Botao";

function App() {
  const pessoas = [
    { nome: "Mahyara", idade: 24 },
    { nome: "Athyla", idade: 30 },
    { nome: "Paula", idade: 46 },
  ];

  const titulos = [
    { title: "Menu" },
    { title: "Postagens" },
    { title: "Fale Conosco" },
  ];

  return (
    <div className="App">
      <h1>Aula 02</h1>
      {/*<Bio nome={pessoas[0].nome} idade={pessoas[0].idade} />
      <Bio nome={pessoas[1].nome} idade={pessoas[1].idade} />
    <Bio nome={pessoas[2].nome} idade={pessoas[2].idade} />*/}

      {/*o index serve como um contador aqui e também como chave*/}
      {pessoas.map((item, index) => (
        <Bio key={index} nome={item.nome} idade={item.idade}></Bio>
      ))}

      {titulos.map((item, index) => (
        <Botao key={index} contador={index} title={item.title}></Botao>
      ))}
    </div>
  );
}

export default App;
