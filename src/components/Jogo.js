import React, { useState } from "react";
import palavras from "../components/palavras";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

const palavraAleatoria = () => {
  const aleatoria = Math.floor(Math.random() * palavras.length);
  return palavras[aleatoria];
};

const Jogo = () => {
  const [escolherPalavra, setEscolherPalavra] = useState("");
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);

  const comecarJogo = () => {
    const pegarAleatoria = palavraAleatoria();
    setEscolherPalavra(pegarAleatoria);
    setPalavraEscolhida(
      pegarAleatoria.split("").map((letra) => ({ valor: letra, acertou: false }))
    );
  };

  return (
    <div className="container-pai">
      <div key="container" className="container">
        <img className="" src={images[0]} alt={images[0]}></img>
        <div>
          <button onClick={comecarJogo}>Escolher Palavra</button>
          <div>
            {palavraEscolhida.map((letra, index) => (
              <span key={index}>{letra.acertou ? letra.valor : "_"}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jogo;
