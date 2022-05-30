import InfoPaciente from "./InfoPaciente"

export const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll" >

        {pacientes && pacientes.length ? ( //if
          <>  
            <h2 className="font-black text-3xl text-center">
            Listado Pacientes
            </h2>
            <p className="text-lg mt-5 mb-10 text-center">
              Administra tus{' '}
              <span className="text-green-600 font-bold">
                Pacientes y Citas
              </span>
            </p>

            { pacientes.map( paciente => (
              <InfoPaciente 
              key = {paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente} 
              />       
            ))}          
          </>
        ) : ( //else
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>
            <p className="text-lg mt-5 mb-10 text-center">
              Comizan agregando pacientes{' '}
              <span className="text-green-600 font-bold">
                y apareceran en este lugar
              </span>
            </p>
          </>      



        )}

    </div>
  )
}

export default ListadoPaciente
