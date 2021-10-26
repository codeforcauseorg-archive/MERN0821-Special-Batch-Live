const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://anujgarg:anujgarg@merncourse.8b0lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

const User = mongoose.model("User", { username: String, name: String });

app.get("/users/", function (req, res) {
  User.find().then(function (response) {
    res.send(response);
  });
});

app.get("/users/:username", function (req, res) {
  User.findOne({ username: req.params.username })
    .then(function (response) {
      if (response) {
        res.send(response);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(function (error) {
      res.sendStatus(404);
    });
});

app.post("/users", function (req, res) {
  let userBody = req.body;
  let user = new User(userBody);
  user.save().then((response) => res.send(response));
});

mongoose.connect(url, function (dberr) {
  if (dberr) {
    console.log(dberr);
  } else {
    console.log("DB Connected");
    app.listen(3000, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Application Started");
      }
    });
  }
});
