import React from 'react';
import { Link } from 'react-router-dom';
const Navegacion = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light p-0 mt-4">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item" >
						<Link className="nav-link" to="/">
							Inicio <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/busqueda">
							Busqueda <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/mis-cartas">
							Mis Cartas<span className="sr-only">(current)</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navegacion;
