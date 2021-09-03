function Human(name){
    this.name = name;
    // this.say_hi = function(){
    //     console.log("Hi from", this.name);
    // }
}

Human.prototype.say_hi = function (){
    console.log("Hi from", this.name);
}

console.log(Human.prototype);

let anuj = new Human("Anuj Garg");

anuj.say_hi();

// console.log(anuj);
