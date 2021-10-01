let express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anujgarg:anujgarg@merncourse.8b0lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const Student = mongoose.model("Student", {
  name: String,
  email: String,
  phone: String,
  subjects: Array
});


const app = express();

app.use(express.json());

app.post("/", function (req, res) {
  let body = req.body;
  const student = new Student({
    name: body.name,
    email: body.email,
    phone: body.phone,
    subjects: body.subjects
  });

  student.save().then(function () {
    res.send("meow");
  });

});

app.get("/", function(reqq, res){
    Student.find().then(function(response){
        res.send(response);
    })
})

app.listen(3000);
