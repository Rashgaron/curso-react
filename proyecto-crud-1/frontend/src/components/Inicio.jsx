import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ListadoProductos from './ListadoProductos';
import {useDispatch} from 'react-redux'
import {descargarProductosAction} from '../actions/productoAction'
const Inicio = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('hola')
        dispatch(descargarProductosAction())
    },[])


	const history = useHistory();

	const handleClick = () => {
		history.push('/crear-producto');
	};
	return (
		<Fragment>
			<h1>Listado de productos</h1>
			<button type="button" className="btn btn-success" onClick={handleClick}>
				Nuevo Producto
			</button>
            <div >
                <ListadoProductos></ListadoProductos>
            </div>
		</Fragment>
	);
};

export default Inicio;
