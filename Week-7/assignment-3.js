class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function detectCycle(head){
    let slow = head;
    let fast = head;
    while(fast.next!=null){
        slow = slow.next;
        fast = fast.next;
        if(fast.next){
            fast = fast.next;
        }
        if(fast == slow){
            return true;
        }
    }
    return false
}

//inserting test data into linked list
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;
console.log(head);
//O/P:- 1->2->3->4->5->1
console.log(detectCycle(head));
//O/P:true
var head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
console.log(detectCycle(head1)) 
//O/P:false
