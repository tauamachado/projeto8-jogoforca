export default function Letras({ verificarLetra, ativarLetras, letrasEscolhidas}) {
    
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    return (
      <div className="alfabeto">
        {alfabeto.map((letra) => (
          <button data-test="letter" className={`botao ${ativarLetras || letrasEscolhidas.includes(letra.toLowerCase())? 'desabilitado' : 'habilitado'}` } disabled={ativarLetras ||letrasEscolhidas.includes(letra.toLowerCase())} key={letra} onClick={() => verificarLetra(letra)}>
            {letra}
          </button>
        ))}
      </div>
    );
  }
  
