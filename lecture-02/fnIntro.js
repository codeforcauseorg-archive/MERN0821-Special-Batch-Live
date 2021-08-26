function square(num){
    return num * num;
}

function say_hello(){
    console.log("Hello");
}


// let value = say_hello();
// console.log(value);

// let another = say_hello;

// another();

let temp = say_hello;
say_hello = square;
square = temp;

square();
square();
console.log(say_hello(10));

console.log(say_hello);
console.log(square);
