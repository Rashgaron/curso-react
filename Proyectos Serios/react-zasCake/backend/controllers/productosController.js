const Producto = require("../models/producto");

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find({categoria_principal:req.params.categoria});
    res.status(200).json({ productos});
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error al obtener productos" });
  }
};

exports.crearProducto = async (req,res)=>{
  try {
		// Crear una nueva carta

		const producto = new Producto(req.body);

		// todo: Guardar creador

		// Guardar carta

		producto.save();
		res.status(200).json({ msg: 'Carta guardada con éxito' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
}
