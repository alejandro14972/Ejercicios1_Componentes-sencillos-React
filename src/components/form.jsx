import { useState } from 'react';

export default function Form() {
    const [nombre, setNombre] = useState('');

    const handleChange = (event) => {
        setNombre(event.target.value); 
        console.log(nombre);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        alert("Nombre ingresado: " + nombre)
      };
      
      
  return (
    <div className='col-md-3'>

<h3> Mi nombre es: {nombre}</h3>


    <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre} 
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
