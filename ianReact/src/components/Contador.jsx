import { useRef, useState } from "react";

const Contador = ({posicion}) => {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)

    renderCount.current++;

    return (
        <div className={posicion}>
            <p>Contador: {count}</p>
            <button className="btn btn-secondary" onClick={() => setCount(count => count + 1)}>Incrementar</button>
            <p>Este componente se ha renderizado {renderCount.current} veces.</p>
        </div>
    )

}

export default Contador;