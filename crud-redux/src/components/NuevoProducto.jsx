import React from 'react';
const NuevoProducto = () => {
	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card mt-4">
					<div className="card-body">
						<h2 className="text-center mb-4  font-weight-bold">Agregar nuevo producto</h2>

						<form>
							<div className="form-group">
								<label>Nombre producto</label>
								<input
									name="nombre"
									type="text"
									className="form-control"
									placeholder="nombre producto"
								/>
							</div>
							<div className="form-group">
								<label>Precio producto</label>
								<input
									name="precio"
									type="number"
									className="form-control"
									placeholder="Precio producto"
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Agregar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NuevoProducto;
