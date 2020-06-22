import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
function App() {
	const titulo = 'Clima React App';
	return (
		<Fragment>
			<Header titulo={titulo} />
      <a href='#!'className="waves-effect waves-light btn">button</a>
      <i className="material-icons prefix">add_a_photo</i>
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Formulario></Formulario>
						</div>
						<div className="col m6 s12">2</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
