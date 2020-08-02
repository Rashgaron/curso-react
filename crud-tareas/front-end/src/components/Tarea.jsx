import React, { Fragment, useState } from 'react';
import axios from 'axios';
const Tarea = ({ tarea }) => {
	const [ eliminado, guardarEliminado ] = useState(false);
	const handleOnClick = () => {
		const eliminarTarea = () => {
			axios
				.post('http://localhost:4000/tareas/delete/' + tarea._id)
				.then(guardarEliminado(true))
				.catch(function(err) {
					console.log(err);
				});
		};
		eliminarTarea();
	};
	return (
		<Fragment>
			{eliminado ? null : (
				<div className='container tarea'>
					<h3 className="">{tarea.nombre}</h3>
					<p className="">{tarea.descripcion}</p>
					<button className="btn btn-danger ml-3 " onClick={handleOnClick}>
						Eliminar
					</button>
				</div>
			)}
		</Fragment>
	);
};

export default Tarea;
