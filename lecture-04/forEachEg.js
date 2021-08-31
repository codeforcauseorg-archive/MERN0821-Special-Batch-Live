let fruits = ["apple", "mango", "guava"];

// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index]);
// }

function eat(fruit){
    console.log("Eat", fruit);
}

for (const fruit of fruits) {
    console.log(fruit);
}

// fruits.forEach(eat);

// fruits.forEach(function(item) {
//     console.log(item);
// })



