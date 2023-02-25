import forca0 from "../assets/forca0.png"

export default function Jogo() {
    return (
        <div className="container-forca">
            <img src={forca0} alt="forca" />
            <button>Escolher Palavra</button>
            <h1>_ _ _ _ _</h1>
        </div>
    )
}