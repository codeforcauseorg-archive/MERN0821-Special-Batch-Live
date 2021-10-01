let axios = require("axios");

let data = {
    name: "Shubham",
    email: "shubham@gmail.com",
    phone: "9087654321",
    subjects: ["Maths", "English"]
}

axios.post("http://localhost:3000/", data).then(function(response){
    console.log(response.data);
});