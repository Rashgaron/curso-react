import React from 'react';
import { Card } from 'react-bootstrap';
import styled from '@emotion/styled';
import '../css/Tarjeta.css';


const Informacion = styled.p`font-size: 10px;`;
const Tarjeta = ({ titulo, descripcion, imagen, data}) => {
	return (
		<Card className="mb-4 card" >
			<Card.Img className="card_img" variant="top" alt='Imagen de muebles' src={imagen} />
			<Card.Body className="card_txt">
				<Card.Title>{titulo}</Card.Title>
				<hr></hr>
				<Informacion>{descripcion}</Informacion>
			</Card.Body>
		</Card>
	);
};

export default Tarjeta;
