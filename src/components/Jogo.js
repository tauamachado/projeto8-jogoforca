import palavras from "./palavras";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import { useState } from "react";
import Letras from "./Letras";

const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

const underline = () => <span className="editar-underline">_</span>;

export default function Jogo() {
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [erros, setErros] = useState(0);
  const [ativarLetras, setAtivarLetras] = useState(true);
  const [ganhou, setGanhou] = useState(false);
  const [perdeu, setPerdeu] = useState(false);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [jogarNovamente, setJogarNovamente] = useState(false);

  const palavraAleatoria = () => {
    const aleatoria = Math.floor(Math.random() * palavras.length);
    return palavras[aleatoria];
  };

  const comecarJogo = () => {
    const pegarAleatoria = palavraAleatoria();
    setPalavraEscolhida(
      pegarAleatoria.split("").map((letra) => ({ valor: letra, acertou: false }))
    );
    setErros(0);
    setAtivarLetras(false);
    setGanhou(false);
    setPerdeu(false);
    setLetrasEscolhidas([]);
    setJogarNovamente(false);
  };

  const verificarLetra = (letra) => {
    let acertou = false;
    const novaPalavra = palavraEscolhida.map((l) => {
      if (l.valor === letra.toLowerCase()) {
        acertou = true;
        setAtivarLetras(false);
        console.log("acertou");
        return { ...l, acertou: true };
      }
      console.log("errou");
      setAtivarLetras(false);
      return l;
    });
    setPalavraEscolhida(novaPalavra);
    if (!acertou) {
      setErros(erros + 1);
    }
    setLetrasEscolhidas([...letrasEscolhidas, letra.toLowerCase()]);
    if (!novaPalavra.some((letra) => !letra.acertou)) {
      setGanhou(true);
      setAtivarLetras(true);
      setJogarNovamente(true);
    }
    if (erros + 1 === images.length - 1) {
      setPerdeu(true);
      setAtivarLetras(true);
      setJogarNovamente(true);
    }
  };

  return (
    <div className="container-pai">
      <div key="container" className="container">
        <img data-test="game-image" className="" src={images[erros]} alt={images[erros]}></img>
        <div className="container-right">
        <button data-test="choose-word" onClick={comecarJogo}>Escolher Palavra</button>
          <div data-test="word" className={`palavra-escolhida ${ganhou ? 'acertou' : ''} ${perdeu ? 'errou' : ''}`}>
            {palavraEscolhida.map((letra, index) => (
              <span data-test="word" key={index}>
                {letra.acertou || perdeu ? letra.valor : underline("_")}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Letras ativarLetras={ativarLetras} verificarLetra={verificarLetra} letrasEscolhidas={letrasEscolhidas} />
    </div>
  )
}
