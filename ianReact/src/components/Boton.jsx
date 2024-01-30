import { useState } from "react"

const Boton = () => {
    const [buttonText, setButtonText] = useState ('Haz click aqui')

    return (
        <div>
            <button className="btn btn-light" onClick={() => setButtonText('Gracias por hacer click')}>{buttonText}</button>
        </div>
    )
}

export default Boton;