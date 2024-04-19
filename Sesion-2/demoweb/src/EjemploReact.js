import { Despedida } from "./components/Despedida";
import { Saludo } from "./components/Saludo";
import { useState } from 'react'

export function EjemploReact() {
    // Variables de estado
    const [isDespedida, setIsDespedida] = useState(false)

    const handleClick = ({target}) => {
        console.log('Se hizo clic en el botón', target.classList);
        setIsDespedida(!isDespedida)
    }

    // Renderizar el componente (la vista)
    return (<div>
        <h1>Ejemplo Componente React usando Hooks y estado</h1>
        <br />
        {/* Evento clic en el botón */}
        <button className="boton ejemplo" type="button" onClick={handleClick}>Haz clic aquí</button>

        {!isDespedida &&
            <Saludo nombre="Ivy" />
        }

        {isDespedida &&
            <Despedida nombre="Ivy" />
        }

        <hr />

        {isDespedida ? 'TRUE Despedida' : 'FALSE Despedida'}

        <br />

    </div>)
}
