
import './App.css'
import Buscador from './components/Buscador'
import Contador from './components/contador'
import Form from './components/form'
import Ocultar from './components/Ocultar'
import Tareas from './components/Tareas'

function App() {


  return (
    <div className='row'>
    
    <Contador />

    <Form />
   
    <Ocultar></Ocultar>
    
    <Tareas />

    <Buscador />


    </div>
  )
}

export default App
