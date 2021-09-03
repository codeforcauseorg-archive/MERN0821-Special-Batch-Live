const fruits = new Map();
fruits.set("apple", "a sweet red fruit");
fruits.set("mango", "king of fruits");
fruits.set("guava", "sweet and sour");
fruits.set("grapes", "angoor khatte hai");

// console.log(fruits.get("apple"));

// for (const item of fruits.keys()) {
//     console.log(item);
// }

console.log(Array.of(...fruits.values()));