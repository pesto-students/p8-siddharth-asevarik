class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}



function reverseLinkedList(head=new Node(1)) {
    let current = head;
    let next = null;
    let prev = null
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


//inserting test data into linked list
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
console.log(head);
//O/P
// Node {
//     data: 1,
//     next: Node { data: 2, next: Node { data: 3, next: Node {  data:4,   next:  null} } }
//   }

const revhead = reverseLinkedList(head);
console.log(revhead);
//O/P
//   Node {
//     data: 4,
//     next: Node { data: 3, next: Node { data: 2, next: Node { data: 1 , next: null } } }
//   }
