import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
function App() {
	const [ tarea, guardarNuevaTarea ] = useState({
		nombre: '',
		descripcion: ''
	});

	const [ tareas, guardarTareas ] = useState([]);

	// Llamada a la api para cargar tareas
	useEffect(() => {
		const cargarDatos = () => {
			axios
				.get('http://localhost:4000/tareas')
				.then((res) => {
					guardarTareas(res.data);
					console.log('carga exitosa')
				})
				.catch(function(err) {
					console.log('ha habido un error')
					console.log(err);
				});
		};
		cargarDatos();
	}, []);

	useEffect(
		() => {
			if (tarea.nombre !== '') guardarTareas([ ...tareas, tarea ]);
		},
		[ tarea ]
	);

	return (
		<Fragment>
			<div className="container">
				<div className="row ">
					<div className="col-6 mt-5 d-flex justify-content-center">
						<Formulario tarea={tarea} guardarNuevaTarea={guardarNuevaTarea} />
					</div>
					<div className="col-6 mt-4 d-flex justify-content-center">
						<ListaTareas tareas={tareas} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
