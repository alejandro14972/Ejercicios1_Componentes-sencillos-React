
import { useState } from 'react'
export default function Ocultar() {

    const [ocultar, setOcultar] = useState(false)

    const cambiarFuncion = () => {
        console.log(ocultar);

        if (ocultar === false) {
            setOcultar(true)
        } else {
           setOcultar(false)
        }
        
      };

    return (
        <div className='col-md-3'>

<div className={`midiv ${ocultar ? 'ocultar' : ''}`}>
            contenido
        </div>

            <button onClick={cambiarFuncion}>
                MOSTRAR
            </button>
        </div>
    )
}
