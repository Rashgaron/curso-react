const functions = require("firebase-functions");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

let Todo = require("./model/todo.model");
app.use(cors());
app.use(bodyParser.json());
// app.use('/todos', todoRoutes);

// mongoose.connect(
//   "mongodb+srv://rashgaron:1234@cluster0.8pwhb.mongodb.net/dani?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

app.get("/todos", (req, res) => {
  // eslint-disable-next-line array-callback-return
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (err) console.log(err);
    else {
      res.json(todo);
      console.log(todo);
    }
  });
});

app.post("/update:id", (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) console.log(err);
    if (!todo) res.status(404).send("data is not found");
    else todo.todo_description = req.body.todo_description;
    todo.todo_responsible = req.body.todo_responsible;
    todo.todo_priority = req.body.todo_priority;
    todo.todo_completed = req.body.todo_completed;

    todo
      .save()
      // eslint-disable-next-line promise/always-return
      .then((todo) => {
        res.json("updated");
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
});

app.post("/delete/:id", (req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err) => {
    if (err) console.log(err);
    else console.log("Successful deletion");
  });
});

app.post("/add", (req, res) => {
  let todo = new Todo(req.body);
  todo
    .save()
    // eslint-disable-next-line promise/always-return
    .then(() => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch(() => {
      res.status(400).send("adding new todo failed");
      console.log("todo");
    });
});

app.get("/timestamp", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});




exports.app = functions.https.onRequest(app);
