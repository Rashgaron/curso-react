const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = express.Router();
// const PORT = 4000;

let User = require("./user.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://rashgaron:1234@cluster0.8pwhb.mongodb.net/crud-login?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

routes.route("/").post(function (req, res) {
  let data = req.body;
  console.log(req.body)
  User.find({ usuario: data.usuario, password: data.password }, function (
    err,
    resUsuario
  ) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(resUsuario);
    }
  });
});

routes.route("/add").post(function (req, res) {
  let usuario = new User(req.body);
  usuario
    .save()
    .then((usuario) => {
      res.status(200).json({ usuario: "añadido correctamente" });
      console.log(usuario)
    })
    .catch((err) => {
      res.status(400).send("algo ha fallado");
    });
});

app.use("/login", routes);
// app.listen(PORT);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
