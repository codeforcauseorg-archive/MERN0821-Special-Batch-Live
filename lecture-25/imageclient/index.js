const fs = require('fs');
const axios = require('axios');

const content = fs.readFileSync('./thor.png', {encoding: 'base64'});

axios.post("http://localhost:3000/images/", {content}).then(function(response){
    console.log(response.data._id);
}).catch(function(error){
    console.log(error);
})


