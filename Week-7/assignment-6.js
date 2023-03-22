const bucket = require('buckets-js');

class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = []; 
    }
    enQueue(element){
        if(!element){
            console.log("no element is given");
            return;}
        this.stack1.push(element);
    }
    deQueue(){
        if(this.stack1.length === 0 && this.stack2 === 0){
            console.log("Queue is empty guyss");
            return;
        }
        if(this.stack2.length === 0) {
            this.stack2.push(this.stack1[0]);
            this.stack1.shift()
        }
        let x = this.stack2[0];
        this.stack2.shift();
        return x;
    }
    peek(){
        this.tempStack = []
        this.tempStack.push(this.stack1[0]);
        return this.tempStack.shift();
    }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);//Queue:[1,2,3,4]
console.log("dequeuing",queue.deQueue()); // dqueing 1:- queue:[2,3,4]
console.log("peeking",queue.peek()) //peeking 2  :-queue:[3,4]
console.log("dequeuing",queue.deQueue()); // dequeing 2 :-Queue = [3,4] 
console.log("peeking",queue.peek()); //peeking 3:- Queue=[3,4]
