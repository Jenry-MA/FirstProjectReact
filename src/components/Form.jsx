import {useState, useEffect} from 'react'
import Error from './Error'

const Form = ({pacientes ,setPacientes, paciente, setPaciente}) => {

  //inputs formulario
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [correoElectronico, setCorreoElectronico] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  //usamos useEffect para llenar los campos del form al momento de dar click en editar
  useEffect( () => {
      if( Object.keys(paciente).length > 0 ){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setCorreoElectronico(paciente.correoElectronico)
        setFechaAlta(paciente.fechaAlta)
        setSintomas(paciente.sintomas)  
      }
  },[paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha  = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación de formulario

    if([nombre, propietario, correoElectronico, fechaAlta, sintomas].includes('')){
      setError(true)
      return
    }

    setError(false)
    
    const objetoPaciente = {
      nombre, 
      propietario, 
      correoElectronico, 
      fechaAlta, 
      sintomas
    }

    if(paciente.id){
      //editando registro

      objetoPaciente.id = paciente.id
      
      const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      
      setPacientes(pacienteActualizado)
      setPaciente({})

    }else{
      //nuevo registro
      //enviamos al destructuring del app mediante props
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    
    //limpiar form
    setNombre('')
    setPropietario('')
    setCorreoElectronico('')
    setFechaAlta('')
    setSintomas('')
  }

  return (

    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añada Paciente y{' '}
        <span className="text-green-600 font-bold"> Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5"
      >
        {error && 
          <Error>
            <p>Faltan datos en el formulario</p>
          </Error> 
        }

        <div className="mb-5" >
          <label htmlFor="nombreMascota" className="block text-grey-700 uppercase font-bold">Mascota</label>
          <input 
            id="nombreMascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2  w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={nombre}
            onChange={(data) => setNombre(data.target.value)}
          />
        </div>

        <div className="mb-5" >
          <label htmlFor="nombrePropietario" className="block text-grey-700 uppercase font-bold">Propietario</label>
          <input 
            id="nombrePropietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2  w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={propietario}
            onChange={(data) => setPropietario(data.target.value)}
        
          />
        </div>

        
        <div className="mb-5" >
          <label htmlFor="correoElectronico" className="block text-grey-700 uppercase font-bold">Correo Electronico</label>
          <input 
            id="correoElectronico"
            type="email"
            placeholder="Tu Correo Electronico"
            className="border-2  w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={correoElectronico}
            onChange={(data) => setCorreoElectronico(data.target.value)}
          />
        </div>

        
        <div className="mb-5" >
          <label htmlFor="fechaAlta" className="block text-grey-700 uppercase font-bold">Alta</label>
          <input 
            id="fechaAlta"
            type="date"
            className="border-2  w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={fechaAlta}
            onChange={(data) => setFechaAlta(data.target.value)}
          />
        </div>

        
        <div className="mb-5" >
          <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">Síntomas</label>
          <textarea 
            id="sintomas"
            type="text"
            placeholder="Describe los síntomas"
            className="border-2  w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={sintomas}
            onChange={(data) => setSintomas(data.target.value)} 
          />
        </div>

        <input 
          className="bg-green-600 w-full p-3 uppercase text-white rounded-md hover:bg-green-700 cursor-pointer transition-colors" 
          type="submit" 
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />

      </form>

    </div>
    
  
    )
}

export default Form