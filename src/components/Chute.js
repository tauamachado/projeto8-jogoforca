export default function Chute(props) {
    const { desabilitarInput } = props

    return (
        <div className="container-input">
            <span>Já sei a palavra!</span>
            <input disabled={desabilitarInput}/>
            <button>Chutar</button>
        </div>
    )
}