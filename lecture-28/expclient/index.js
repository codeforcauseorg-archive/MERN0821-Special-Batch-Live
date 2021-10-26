let axios = require("axios");

axios
  .get("http://localhost:3000/users/moht")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// axios
//   .post("http://localhost:3000/users/", {
//     username: "keenwarrior",
//     name: "Anuj Garg",
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
