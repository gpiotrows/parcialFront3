
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import ErrorMsg from './components/ErrorMsg';

function App() {

  const [nombre, setNombre] = useState("");
  const [pelicula, setPelicula] = useState("");
  const [cargado, setCargado] = useState(false);
  const [error, setError] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangePelicula = (e) => setPelicula(e.target.value);


  const handleSubmit = (e)=>{
    e.preventDefault()

    if(nombre.length<3 || pelicula.length<6){

      setError(true)
      setCargado(false)
    }
    else {

      setError(false)
      setCargado(true)
    }


  }


  return (
    <>
      
        <h1>Carga de Estudiantes</h1>
        <form onSubmit={handleSubmit}>

          <input 
            name="nombre"
            type = "text" 
            placeholder="Ingresa tu nombre"
            value = {nombre} 
            onChange = {onChangeNombre}/>


          <input 
            name="pelicula"
            type = "text"
            placeholder="Ingresa tu película"
            value = {pelicula} 
            onChange={onChangePelicula}/>

          <button type="submit">ENVIAR</button>

        </form>

        {error ? <ErrorMsg/> : null}

        {cargado ? <Card nombre={nombre} pelicula={pelicula}/> : null}
        
        
        

      
    </>
  )
}

export default App
