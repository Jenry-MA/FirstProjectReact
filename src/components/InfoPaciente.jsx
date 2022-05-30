export const InfoPaciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, correoElectronico, fechaAlta, sintomas, id} = paciente
  
  const handleEliminar = () => {

    const respuesta = confirm(`Deseas eliminar, este paciente?`)

    if(respuesta){
      eliminarPaciente(id)
    }


    
  }

    return (
  
        
          <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-grey-700 uppercase">
              Nombre Mascota:{' '}
              <span className="font-normal normal-case">
                {nombre}
              </span>
            </p>
  
            <p className="font-bold mb-3 text-grey-700 uppercase">
              Propietario:{' '}
              <span className="font-normal normal-case">
                {propietario}
              </span>
            </p>
  
            <p className="font-bold mb-3 text-grey-700 uppercase">
              Corre electronico:{' '}
              <span className="font-normal normal-case">
                {correoElectronico}
              </span>
            </p>
  
            <p className="font-bold mb-3 text-grey-700 uppercase">
              Fecha de Alta:{' '}
              <span className="font-normal normal-case">
                {fechaAlta}
              </span>
            </p>
  
            <p className="font-bold mb-3 text-grey-700 uppercase">
              Síntomas:{' '}
              <span className="font-normal normal-case">
                {sintomas}
              </span>
            </p>

            <div className="flex flex-row justify-between mt-10">
              <button className="bg-orange-400 w-auto mr-2 py-2 px-10 uppercase text-white font-semibold rounded-md hover:bg-orange-500 
              cursor-pointer transition-colors"
              onClick= { () => {setPaciente(paciente)}}  >
              
                Editar
              </button>
             
              <button className="bg-red-600 w-auto py-2 px-10 uppercase text-white font-semibold rounded-md hover:bg-red-700 cursor-pointer transition-colors" 
              onClick={handleEliminar}>
                Eliminar
              </button>
             
            </div>

          </div>
  
    )
  }
  
  export default InfoPaciente
  