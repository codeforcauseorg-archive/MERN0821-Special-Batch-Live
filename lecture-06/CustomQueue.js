class Queue {

    #data = [];

    constructor(){
        this.size = 0;
    }

    insert = function(value){
        this.#data.push(value);
    }

    delete = function(){
        return this.#data.pop(0);
    }

    front = function(){
        return this.#data[0];
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


let queue = new Queue();
queue.insert(10);
queue.insert(30);
queue.insert(20);
queue.insert(40);


