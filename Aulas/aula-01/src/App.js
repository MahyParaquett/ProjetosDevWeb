import Hello from "./components/Hello";
import { Nome } from "./components/Nome";

function App() {
  function clique() {
    console.log("Fui Clicado");
  }

  return (
    <div className="App">
      {/*aqui ele ta chamando a função anterior*/}
      <Hello />
      <Nome />
      <button onClick={clique}>Clique aqui</button>
    </div>
  );
}

export default App;
