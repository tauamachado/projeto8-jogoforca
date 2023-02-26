import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import alfabeto from "./alfabeto";
import palavras from "./palavras";

export default function App() {
  const [desabilitarInput, setDesabilitarInput] = useState(true) 
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto) // letras desabiitadas;
  const [erros, setErros] = useState(0)
  const [palavraJogo, setPalavraJogo] = useState([]) // palavra a ser adivinhada;
  const [palavraEscolhida, setPalavraEscolhida] = useState([]) // palavra sorteada;

  function iniciarJogo() {
    setDesabilitarInput(false)
    setLetrasUsadas([])
    sortearPalavra()
  }

  function sortearPalavra() {
    const i = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[i]
    const palavraArray = palavra.split("") // o split irá transformar a string em um array. Sendo que, cada letra representa uma posição do array;
    setPalavraEscolhida(palavraArray)
    console.log(palavra)

    let tracos = []
    palavraArray.forEach(() => tracos.push(" _"))
    setPalavraJogo(tracos)
  }

  function clicarLetra(letraClicada) {
    setLetrasUsadas([...letrasUsadas, letraClicada])
  }

  return (
    <div className="container-tela">
      <Jogo iniciarJogo={iniciarJogo} erros={erros} palavraJogo={palavraJogo}/>
      <Letras letrasUsadas={letrasUsadas} clicarLetra={clicarLetra}/>
      <Chute desabilitarInput={desabilitarInput}/>
    </div>
  )
}


