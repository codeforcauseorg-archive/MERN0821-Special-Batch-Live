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

    removeLast = function () {
        if(this.#size == 1){
            return this.removeFirst();
        }

        let value = this.#tail.value;
        let secondLast = this.#getByIndex(this.#size-2);
        this.#tail = secondLast;
        this.#tail.next = null;

        this.#size -= 1;

        return value;
    }

    remove = function (index) {
        if(index == 0){
            return this.removeFirst();
        }

        if(index == this.#size-1){
            return this.removeLast();
        }

        let prev = this.#getByIndex(index-1);
        let value = prev.next.value;
        prev.next = prev.next.next;

        this.#size -= 1;

        return value;
    }

    getValue = function (index) {
        return this.#getByIndex(index).value; 
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

    clean = function () {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    reverse = function() {
        
        let prev = null;
        let present = this.#head;

        this.#tail = present;

        while(present){
            let temp = present.next;
            present.next = prev;

            prev = present;
            present = temp;
        }

        this.#head = prev;

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

    top = function() {
        return this.#data.getValue(0);  
    }

    isEmpty = function() {
        return this.#data.size() == 0;;  
    }
}

let ll = new LinkedList();

ll.insertLast("a");
ll.insertLast("b");
ll.insertLast("c");
ll.insertLast("d");

ll.display();

ll.reverse();

ll.display();