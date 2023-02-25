import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import alfabeto from "./alfabeto";

export default function App() {
  const [desabilitarInput, setDesabilitarInput] = useState(true) 
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto) // letras usadas pelo usuário;

  return (
    <div className="container-tela">
      <Jogo />
      <Letras letrasUsadas={letrasUsadas}/>
      <Chute desabilitarInput={desabilitarInput}/>
    </div>
  )
}

// teste para atualizar a mensagem do commit

