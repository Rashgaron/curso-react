import React, { useState } from 'react';
import Box1 from './components/box1';
import Formulario from './components/Formulario';
import './App.css';
function App() {
	const [ usuarios, guardar ] = useState([]);

	const guardarUsuarios = (usuario) => {
		guardar([ ...usuarios, usuario ]);
	};
	return (
		<div className="container">
			<div className="row center-block">
				<div className="col s12">
					<p className="col-content title">My App</p>
				</div>
			</div>
			<div className="row">
				<div className="col  s6 ">
					<Box1 />
				</div>
				<div className="col s6">
					<div className="col-content">
						<Formulario guardarUsuarios={guardarUsuarios} />
					</div>
				</div>
			</div>
			<div className="row">
				<h2>Listado de usuarios</h2>
	{usuarios.map((usuario) =>(<p>{usuario.nombre}</p>)
	
				 )}
			</div>
		</div>
	);
}

export default App;
