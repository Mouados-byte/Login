const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();


app.set('view engine', 'ejs');
app.set("views" , path.join(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);


var todosdb = [];
const uri = `mongodb+srv://${process.env.MONGOOSE_NAME}:${process.env.MONGOOSE_PASSWORD}@cluster0.s5vva.mongodb.net/?retryWrites=true&w=majority`;
// Connect to the MongoDB database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'accounts'
});

const todoSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    todo: String
  });
  
  // Create a model for the todos
  const Todo = mongoose.model('todos', todoSchema , 'todos');

  app.get("/", (req, res) => {
        // Find all todos in the collection
            Todo.find({}, (err, todos) => {
                
                if (err) {
                    res.send({ status: 'error', message: err });
                } else {
                    // Render the mainpage template with the todos array
                    todosdb = todos;
                    res.render("mainpage", { todos: todosdb } , (err , html) => {
                        res.send(html);
                    });
                }
            });
    });

app.post("/" , (req , res) => {
    Todo.create({ _id: new mongoose.Types.ObjectId(), todo: req.body.todo }, (err, todo) => {
        if (err) {
          res.send({ status: 'error', message: err });
        } else {
          res.redirect("/");
        }
      });

});

app.delete('/todos/:id', (req, res) => {
    Todo.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send({ status: 'error', message: err });
      } else {
        res.send({ status: 'success' });
      }
    });
  });
  app.put('/todos/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedTask = req.body.task;
  
    Todo.findByIdAndUpdate(id, { todo: updatedTask }, (err , result) => {
        if (err) {
          res.status(500).send({ status: 'error', message: err });
        } else {
          res.send({response: "success"});
        }
      });
  });

app.listen(process.env.PORT || 4000 , () => {
    console.log("server listening on port " + process.env.PORT || 4000 )
});

