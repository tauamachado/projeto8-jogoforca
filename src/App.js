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
  const [corPalavra, setCorPalavra] = useState("preto")

  function iniciarJogo() {
    setDesabilitarInput(false)
    setLetrasUsadas([])
    sortearPalavra()
    setErros(0)
    setCorPalavra("preto")
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
    if (palavraEscolhida.includes(letraClicada)) {
      acertouLetra(letraClicada)
    } else {
      errouLetra(letraClicada)
    }

  }

  function acertouLetra(letraClicada) {
    const novaPalavraJogo = [...palavraJogo]

    palavraEscolhida.forEach((letraEscolhida, i) => {
      if (palavraEscolhida[i] === letraClicada) {
        novaPalavraJogo[i] = letraEscolhida
      }
    })
    setPalavraJogo(novaPalavraJogo)

    if(!novaPalavraJogo.includes(" _")) {
      setCorPalavra("verde")
      fimDoGame()
    }
  }

  function errouLetra(letraClicada) {
    const novoErro = erros + 1
    setErros(novoErro)

    if(novoErro === 6) {
      setCorPalavra("vermelho")
      fimDoGame()
    }

  }

  function fimDoGame() {
    setLetrasUsadas(alfabeto)
    setDesabilitarInput(true)
    setPalavraJogo(palavraEscolhida)
  }

  return (
    <div className="container-tela">
      <Jogo iniciarJogo={iniciarJogo} erros={erros} palavraJogo={palavraJogo} corPalavra={corPalavra}/>
      <Letras letrasUsadas={letrasUsadas} clicarLetra={clicarLetra}/>
      <Chute desabilitarInput={desabilitarInput}/>
    </div>
  )
}


