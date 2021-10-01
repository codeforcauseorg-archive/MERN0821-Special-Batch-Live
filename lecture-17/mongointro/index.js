const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anujgarg:anujgarg@merncourse.8b0lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const Student = mongoose.model("Student", {
  name: String,
  email: String,
  phone: String,
  subjects: Array
});

const stu = new Student({
  name: "Ravi",
  email: "ravi@gmail.com",
  phone: "9087654321",
  subjects: ["Maths", "English"]
});

stu.save().then(function () {
  console.log("meow");
});
