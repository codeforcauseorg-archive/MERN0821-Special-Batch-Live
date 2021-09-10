let arr = [1, 2, 3, 4];

arr.forEach(function(item, index, location) {
    location[index] = (item*item);
});

console.log(arr);

// let another = arr.map(function(item) {
//     return item * item;
// });

// console.log(another);


