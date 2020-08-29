import React from 'react';
import {useSelector} from 'react-redux'
import Producto from './Producto'
const ListadoProductos = () => {

    const productos = useSelector(state =>state.producto.productos)
	return (
		<div className="mt-5">
			
			<h1>Productos disponibles</h1>
            {productos.map(producto =>(
                <Producto key={producto._id} producto={producto}></Producto>
            ))}
		</div>
	);
};

export default ListadoProductos;
