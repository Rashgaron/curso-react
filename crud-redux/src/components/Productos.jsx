import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
const Productos = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Consultar la api
		const cargarProductos = () => dispatch(obtenerProductosAction());
		cargarProductos();
		// eslint-disable-next-line
	}, []);

	// Obtener el state
	const cargando = useSelector((state) => state.productos.loading);
	let productos = useSelector((state) => state.productos.productos);
	// productos = productos[0]
 	const error = useSelector((state) => state.productos.error);
	return (
		<Fragment>
			<h2 className="text-center my-5">Listado de Productos</h2>
			{error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}

			{cargando ? <p className="text-center">Cargando ...</p> : null}
			<table className="table tbale-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>

				<tbody>
					{productos.length === 0 ? (
						<tr>
							<td>No hay productos</td>
						</tr>
					) : (
						// console.log(productos)
						productos.map((dato) => <Producto key={dato.id} producto={dato} />)
					)}
				</tbody>
			</table>
		</Fragment>
	);
};

export default Productos;
