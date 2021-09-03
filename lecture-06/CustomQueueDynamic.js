class Queue {

    #data = new Array(10);
    #size = 0;
    #front = 0;
    #end = -1;

    constructor(){
    }

    insert = function(value){

        if(this.#data.length === this.#size){
            let old = this.#data;
            this.#data = new Array(2*old.length);
            
            for (let index = 0; index < old.length; index++) {
                this.#data[index] = old[(index+this.#front)%(old.length)];
                this.#front = 0;
                this.#end = old.length-1;
            }
        }

        this.#end = (this.#end+1) % this.#data.length;
        this.#data[this.#end] = value;
        this.#size += 1;
    }

    delete = function(){
        let value = this.#data[this.#front];
        this.#front = (this.#front+1) % this.#data.length;
        this.#size -= 1;
        return value;
    }

    front = function(){
        return this.#data[this.#front];
    }

    empty = function(){
        return this.#data.#size == 0;
    }
}


let queue = new Queue();

for (let index = 0; index < 10000; index++) {
    queue.insert(index);
}

console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());
console.log(queue.delete());



