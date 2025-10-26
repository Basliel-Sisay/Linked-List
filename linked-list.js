class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value){
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    size(){
        return this.length;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        return this.tail;
    }
    at(index){
        if (index < 0 || index >= this.length){ 
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.nextNode;
        }
        return current;
    }
    pop() {
        if (!this.head){
            return null;
        }
        if (this.length === 1){
            const removed = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removed;
        }
        let current = this.head;
        while (current.nextNode !== this.tail){
            current = current.nextNode;
        }
        const removed = this.tail;
        current.nextNode = null;
        this.tail = current;
        this.length--;
        return removed;
    }
    contains(value){
        let current = this.head;
        while (current) {
            if (current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }
    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value){
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }
    toString() {
        let result = '';
        let current = this.head;
        while (current){
            result += '( ' + current.value + ' ) -> ';
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }
    insertAt(value, index) {
        if (index < 0 || index > this.length){
            return false;
        }
        if (index === 0) {
            this.prepend(value);
            return true;
        }
        if (index === this.length){
            this.append(value);
            return true;
        }
        const newNode = new Node(value);
        let prev = this.at(index - 1);
        newNode.nextNode = prev.nextNode;
        prev.nextNode = newNode;
        this.length++;
        return true;
    }
    removeAt(index) {
        if (index < 0 || index >= this.length){ 
            return null;
        }
        if (index === 0) {
            const removed = this.head;
            this.head = this.head.nextNode;
            if (this.length === 1) this.tail = null;
            this.length--;
            return removed;
        }
        if (index === this.length - 1){
            return this.pop();
        } 
        let prev = this.at(index - 1);
        const removed = prev.nextNode;
        prev.nextNode = removed.nextNode;
        this.length--; 
        return removed;
    }
}