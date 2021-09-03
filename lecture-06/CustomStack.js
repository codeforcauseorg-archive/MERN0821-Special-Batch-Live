class Stack {

    #data = [];

    constructor(){
        this.size = 0;
    }

    push = function(value){
        this.#data.push(value);
    }

    pop = function(){
        return this.#data.pop();
    }

    top = function(){
        return this.#data[this.#data.length - 1];
    }

    empty = function(){
        return this.#data.length == 0;
    }

    display = function() {
        console.log(this.#data);
    }

    toString = function () {
        return String(this.#data);
    }
}




let stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(20);
stack.push(40);

console.log(stack.toString());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
