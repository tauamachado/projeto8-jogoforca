import "./css/reset.css"
import "./css/style.css"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"

export default function App() {
  return (
    <div className="App">
      <Jogo />
      <Letras />
    </div>
  );
}

