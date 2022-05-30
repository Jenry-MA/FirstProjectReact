import { useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import ListadoPaciente from "./components/ListadoPaciente"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []) //Para almacenar 
  
  const [paciente, setPaciente] = useState({}) //Para editar

  //local storage, esto es para que se mantengan almacenados en el cache del explorador y no se elimine al dar F5
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])
  

  const eliminarPaciente = (id) => {
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id )

    setPacientes(pacienteActualizado)
  }

  return (
  
  <div className="container mx-auto mt-20">

    <Header/>

    <div className="mt-12 md:flex" >
      <Form
        pacientes    = {pacientes}
        setPacientes = {setPacientes}
        paciente     = {paciente}
        setPaciente  = {setPaciente} 
      />
      <ListadoPaciente 
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente} 
      />
    </div>
  </div>
    )
}

export default App
