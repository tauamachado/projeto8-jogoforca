// Importações necessárias
import "./css/reset.css";
import "./css/style.css";
import Jogo from "../src/components/Jogo";

// Função principal do aplicativo
function App() {
  // Renderiza o componente Jogo
  return (
    <div className="App">
      <Jogo />
    </div>
  );
}

// Exporta a função principal do aplicativo
export default App;