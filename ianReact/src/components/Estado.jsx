import { useState } from "react"

const Estado  = ({color}) => {
    const [agregar, setAgregar] = useState ('Guete');

    return (
        <div>
            <button className= {color} onClick={() => setAgregar('Ian') }>
                    
                {agregar}
            </button>
        </div>
    )
}

export default Estado;