import { useState } from 'react';
export default function Buscador() {

    const diccionario = [
        { id: 1, animal: "Perro" },
        { id: 2, animal: "Gato" },
        { id: 3, animal: "Conejo" },
        { id: 4, animal: "Ratón" },
        { id: 5, animal: "Caballo" }
    ];

    const [buscador, setBuscador] = useState('');
   
    const resultadosFiltrados = [];
   
    const handleChange = (event) => {
        setBuscador(event.target.value); 
        console.log(buscador);
    };

          for (let i = 0; i < diccionario.length; i++) {
            console.log(diccionario[i].animal);
            
            if (diccionario[i].animal.toLowerCase().includes(buscador.toLowerCase())) {
                resultadosFiltrados.push(diccionario[i]); 
            }
          }
    return (
        <div>
            <h1>Buscador</h1>
            <input type="text" id="buscador" value={buscador} onChange={handleChange} placeholder="Buscar..."/>
            <ul className="task-list">
                {resultadosFiltrados.map((item) => (
                    <li key={item.id}>{item.animal}</li>
                ))}
            </ul>
            
        </div>
    )
}
