class Tree{
    constructor(data){
        this.data = data
        this.left = null;
        this.right = null;
    }

}

function isBinaryTree(rootNode){
    return isBstUtil(rootNode,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
}
function isBstUtil(node,min,max){
    if(node == null)return true;
    if(node.data<min ||node.data>max){
        return false
    }
    return (isBstUtil(node.left,min,node.data-1)&&isBstUtil(node.right,node.data+1,max));
}


const rootNode = new Tree(5);
rootNode.left = new Tree(1);
rootNode.right = new Tree(4);
rootNode.right.left = new Tree(3);
rootNode.right.right = new Tree(6);
 console.log(isBinaryTree(rootNode))//true
const rootNode2 = new Tree(2);
rootNode2.left = new Tree(1);
rootNode2.right = new Tree(3);
console.log(isBinaryTree(rootNode2)) // false