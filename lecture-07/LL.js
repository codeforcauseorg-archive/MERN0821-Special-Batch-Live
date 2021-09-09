// class Human {

//     constructor(name, next=null){
//         this.name = name;
//         this.next = next;
//     }
// }

// ravi = new Human("Ravi")
// katie = new Human("Katie")
// sachin = new Human("Sachin")
// tina = new Human("Tina")
// ram = new Human("Ram")

// ravi.next = katie
// katie.next = sachin
// sachin.next = tina
// tina.next = ram
// console.log(ravi.next.next.next.name)

class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    #head = null;
    #tail = null;
    #size = 0;

    insertFirst = function(value) {
        let node = new Node(value);
        node.next = this.#head;
        this.#head = node;

        if(this.#size == 0){
            this.#tail = this.#head;
        }

        this.#size += 1;
    }

    removeFirst = function() {
        if(this.#size === 0){
            throw Error("List is empty");
        }

        let value = this.#head.value;
        this.#head = this.#head.next;

        if(this.#size == 1){
            this.#tail = null;
        }

        this.#size -= 1;

        return value;
    }

    insertLast = function(value) {
        if(this.#size == 0){
            this.insertFirst(value);
            return;
        }

        let node = new Node(value);
        this.#tail.next = node;
        this.#tail = node;

        this.#size += 1;
    }

    insert = function(value, index) {

        if(index < 0 || index > this.#size){
            throw Error("Index out of Bound");
        }

        if(index == 0){
            this.insertFirst(value);
            return;
        }

        if(index == this.#size){
            this.insertLast(value);
            return;
        }

        let node = new Node(value);
        let prev = this.#getByIndex(index-1);
        node.next = prev.next;
        prev.next = node;
        this.#size += 1;
    }

    #getByIndex = function(index) {
        let temp = this.#head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    display = function () {
        let data = [];
        let temp = this.#head;

        while(temp){
            data.push(temp.value);
            temp = temp.next;
        }
        console.log(data);
    }

    size = function () {
        return this.#size;
    }
}

class Stack {

    #data = new LinkedList();

    push = function (value) {
        this.#data.insertFirst(value);   
    }

    pop = function () {
        return this.#data.removeFirst();   
    }


}

let ll = new LinkedList();

ll.insertFirst("Katie");
ll.insertLast("Sachin");
ll.insert("Mohit", 1);

ll.insert("Shubham", 5);

console.log(ll.size());



ll.display();

