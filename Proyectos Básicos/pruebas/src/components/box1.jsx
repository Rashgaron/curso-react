import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import Error from './Error'
const BoxTitle = styled.h2`
	font-size: 25px;
	font-weight: bold;
	text-align: center;
`;

const Box1 = () => {
	const [ contador, guardarContador ] = useState(0);
	const [ error, guardarError ] = useState(false);
	const aumentarContador = () => {
		guardarContador(contador + 1);
		if (error) guardarError(false);
	};
	const decrementarContador = () => {
		if (contador > 0) {
			guardarContador(contador - 1);
			guardarError(false);
		} else guardarError(true);
	};

	return (
		<Fragment>
			{error ? <Error mensaje='El contador no puede ser negativo'></Error> : null}
			<div className="col-content box">
				<BoxTitle>Contador de pulsaciones: {contador}</BoxTitle>
				<div className="row">
					<div className="col s6 center-align">
						<a href='#!' onClick={aumentarContador} className="col-content waves-effect btn">
							Incrementar
						</a>
					</div>
					<div className="col s6 center-align">
						<a href='#!' onClick={decrementarContador} className="col-content waves-effect btn">
							Decrementra
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Box1;
