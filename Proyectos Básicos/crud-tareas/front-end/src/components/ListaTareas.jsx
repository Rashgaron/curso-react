import React, { Fragment } from 'react';
import Tarea from './Tarea'
const ListaTareas = ({ tareas }) => {
	return (
		<Fragment>
			<div className="row">
				<h1 className="col-12">Lista de Tareas</h1>
				
				{tareas.map((tarea) => (
						<Tarea className='col-12' tarea={tarea} key={tarea._id}></Tarea>
					
				))}
			</div>
		</Fragment>
	);
};

export default ListaTareas;
