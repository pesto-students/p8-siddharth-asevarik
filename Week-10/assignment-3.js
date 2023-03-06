class Tree{
    constructor(data){
        this.data = data
        this.left = null;
        this.right = null;
    }

}
function levelOrderTraversal(root) {
    let temp = root;
    let queue = [];
    queue.unshift(temp);
    while(queue.length){
        let node = queue.shift();
        console.log(node.data);
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
}


const rootNode = new Tree(5);
rootNode.left = new Tree(1);
rootNode.right = new Tree(4);
rootNode.right.left = new Tree(3);
rootNode.right.right = new Tree(6);
levelOrderTraversal(rootNode) //5
                             //1 4
                             //3 6
const rootNode2 = new Tree(2);
rootNode2.left = new Tree(1);
rootNode2.right = new Tree(3);
console.log("second traversal");
levelOrderTraversal(rootNode2) //2
                              //2 3