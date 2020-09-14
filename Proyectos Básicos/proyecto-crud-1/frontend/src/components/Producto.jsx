import React from 'react';
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../actions/productoAction';
import { loadStripe } from '@stripe/stripe-js';
import clienteAxios from '../config/axios';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_live_k71uaWOjPRpOxhF2CWSUiNzh00X0UtsnG7'
);

const Producto = ({ producto }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(eliminarProductoAction(producto._id));
	};

	const handleClickCheckout = async () => {
		// // Get Stripe.js instance

		try {
			const stripe = await stripePromise;

			// // Call your backend to create the Checkout Session
			const session = await clienteAxios.post('/create-checkout-session', producto);

			console.log(session);

			// const session = await response.json();

			// When the customer clicks on the button, redirect them to Checkout.
			const result = await stripe.redirectToCheckout({
				sessionId: session.data.id
			});
		} catch (error) {
			console.log(error);
		}

		console.log('pulsado');
	};
	return (
		<div className="producto">
			<div className="row">
				<div className="col-6">
					<h4>Producto: {producto.nombre}</h4>
					<h4>Precio: {producto.precio}</h4>
				</div>
				<div className="col my-auto d-flex justify-content-around">
					<button type="button" className="btn btn-danger" onClick={handleClick}>
						Eliminar
					</button>
					<button type="button" className="btn btn-primary" onClick={() => handleClickCheckout()}>
						Comprar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Producto;
