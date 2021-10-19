let axios = require("axios");

// axios.post("http://localhost:3000/users/", { name: "Vasudev Singhal", age: 21 });

axios.get("http://localhost:3000/users/").then(function(response){
    console.log(response.data);
});