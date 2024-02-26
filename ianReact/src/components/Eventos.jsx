import { useEffect, useState } from "react";

const Eventos = () => {
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState("");
    const [textoMascara, setTextoMascara] = useState("");

    function saludar(evento) {
        setContador(contador + 1)
        console.log(evento.nativeEvent);
        evento.preventDefault();
    }

    function mostrarTexto(e) {
        console.log(e.nativeEvent);
        let nombre = e.target.value.toUpperCase();

        if (nombre != "ANGEL") {
            setTexto("Solo se permiten nombres como Angel");
        } else {
            console.log(texto);
            setTexto("")
        }
    }

    function resize() {
        console.log("hiciste un resize");
    }

    // Definimos un listener

    window.addEventListener('resize', resize)

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', resize);
            console.log("Quitamos el listener");
            return true;
        };
    })
    
    // Desafio
    function mascaraInput (event){
        let letra = event.nativeEvent.key;

        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u" && letra!= "Backspace" && letra!= "Shift" && letra!= "Enter") {
            setTextoMascara(textoMascara + letra); // solamente filtra el texto sin las vocales. Antes le estabamos poniendo el value de todo el input, entonces nos devolvia todo lo anterior.
        } // textoMascara esta vacio. setTextoMascara es la funcion modificadora que va agregando cada letra no vocal al valor inicial de textoMascara, que es vacio. 
        
        
    }



    return (
        <div className="container-fluid bg-light p-5">
            <div className="row">
                <div className="col">
                    <h3>Eventos</h3>
                    <button onClick={saludar} className="btn btn-warning">Aceptar</button></div>
                    <p>Contador: {contador}</p>
                    <form action="">
                        <h4>Formulario</h4>
                        <input type="text" onKeyUp={(e) => {mostrarTexto(e)}} />
                        <p>{texto}</p>
                        <h4>Desafio</h4>
                        <input type="text" className="form-control" onKeyDown={(event => {mascaraInput(event)})} />
                        <p>{textoMascara}</p>
                        <button onClick={textoMascara} className="btn btn-warning">Reset</button>
                    </form>
            </div>
            
        </div>
    )
}

export default Eventos;