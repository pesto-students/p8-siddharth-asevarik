class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function rotateLL(head,k){
    let temp = head;
    let kthnode = null;
    let i =0;
    while(temp.next != null){
        //making new head according to temp
        if(i<k){
            kthnode = temp;
        }
        temp=temp.next;
        i++;
    }
    let newHead = kthnode.next;
    kthnode.next = null;
    temp.next = head
    head = newHead;
    return newHead;
}

function printLL(head){
    let temp = head;
    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }
}

//inserting test data into linked list
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(head);
//O/P:- 1->2->3->4->5

const krotate = rotateLL(head,2);
console.log(krotate);
printLL(krotate);
//O/P 3->4->5->1->2
// Node {
//     data: 3,
//     next: Node { data: 4, next: Node { data: 5, next: [Node] } }
//   }