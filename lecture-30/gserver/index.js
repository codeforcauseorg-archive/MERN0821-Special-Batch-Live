const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url =
  "mongodb+srv://anujgarg:anujgarg@merncourse.8b0lx.mongodb.net/forms?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(cors());

const Form = mongoose.model("Form", {
  heading: String,
  description: String,
  questions: Array,
});

app.get("/forms/", function (req, res) {
  Form.find().then(function (response) {
    res.send(response);
  });
});

app.get("/forms/:formid", function (req, res) {
  Form.findById(req.params.formid)
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

app.post("/forms/", function (req, res) {
  console.log("reached here");
  let empty = {
    heading: "Untitled form",
    description: "",
    questions: [],
  };

  let form = new Form(empty);
  form.save().then((response) => res.send(response));
});

app.put("/forms/:formid", function (req, res) {
  let formid = req.params.formid;
  Form.findByIdAndUpdate(formid, req.body).then((response) =>
    res.send(response)
  );
});

mongoose.connect(url, function (dberr) {
  if (dberr) {
    console.log(dberr);
  } else {
    console.log("DB Connected");
    app.listen(5000, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Application Started");
      }
    });
  }
});
