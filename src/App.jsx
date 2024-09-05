import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     <Formulario></Formulario>
    </div>
  )
}

export default App
