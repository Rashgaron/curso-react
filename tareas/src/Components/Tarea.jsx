import React from 'react'
const Tarea = ({tarea, eliminarTarea}) => {
    return (  
        <div className='cita'>
            <p className='nombreMascota'>{tarea.nombreTarea}</p>
            <p>
                Propietario: <span>{tarea.propietario}</span>
            </p>
            <p>Fecha: <span>{tarea.fecha}</span></p>
            <p>Hora:<span>{tarea.hora}</span></p>
            <p>Descripcion: <span>{Credential.descripcion}</span>
            </p>
            <button
            className="button eliminar u-full-width"
            onClick={()=>eliminarTarea(tarea.id)}
            >Eliminar &times;</button>
        </div>
    );
}
 
export default Tarea;