import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Dato from './components/Dato';
function App() {
	// Datos en local storage
	// Por algún DeviceMotionEvent, si está vacío inicialmente peta

	let datosIniciales = JSON.parse(localStorage.getItem('datos'));
	if (!datosIniciales) {
		datosIniciales = [];
	}

	// Guardar dato en datos
	const [ datos, guardarDatos ] = useState(datosIniciales);

	useEffect(
		() => {
			let datosIniciales = JSON.parse(localStorage.getItem('datos'));
			if (datosIniciales) {
				localStorage.setItem('datos', JSON.stringify(datos));
			} else {
				localStorage.setItem('datos', JSON.stringify([]));
			}
		},
		[ datos ]
	);

	const crearDato = (dato) => {
		guardarDatos([ ...datos, dato ]);
	};

	const eliminarDato = (id) => {
		const nuevosDatos = datos.filter((dato) => dato.id !== id);
		guardarDatos(nuevosDatos);
	};
	return (
		<Fragment>
			<div className="row justify-content-center">
				<div className="col-5 p-1 m-2">
					<Header titulo="Tienda virtual" />
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<Formulario crearDato={crearDato} />
				</div>
				<div className="col-6">
					<p>Aquí van a ir todos los nuevos usuarios</p>
					{datos.map((dato) => <Dato key={dato.id} dato={dato} eliminarDato={eliminarDato} />)}
				</div>
			</div>
		</Fragment>
	);
}

export default App;
