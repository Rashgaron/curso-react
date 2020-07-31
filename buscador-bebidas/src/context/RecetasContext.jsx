import React, { createContext, useState, useEffect } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
	const [ recetas, guardarRecetas ] = useState([]);
	const [ busqueda, buscarRecetas ] = useState({
		nombre: '',
		categoria: ''
	});
	const [ consultar, guardarConsultar ] = useState(false);
	const { nombre, categoria } = busqueda;

	useEffect(
		() => {
			if (consultar) {
				const obtenerRecetas = async () => {
					const url = ` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
					const respuesta = await fetch(url);
					const receta = await respuesta.json();
					console.log(receta.drinks);
					guardarRecetas(receta.drinks);
				};
				obtenerRecetas();
			}
		},
		[ busqueda, categoria, consultar, nombre]
	);
	return (
		<RecetasContext.Provider
			value={{
				recetas,
				buscarRecetas,
				guardarConsultar
			}}
		>
			{props.children}
		</RecetasContext.Provider>
	);
};

export default RecetasProvider;
