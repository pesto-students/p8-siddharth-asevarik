class Tree{
    constructor(data){
        this.data = data
        this.left = null;
        this.right = null;
    }

}

function maximumDepth(root){
    if(!root){
        return 0;
    }
    let left = maximumDepth(root.left);
    let right = maximumDepth(root.right);
    let maxDepth = Math.max(left,right);
    return 1+maxDepth;
}
//
const rootNode = new Tree(3);
rootNode.left = new Tree(9);
rootNode.right = new Tree(20);
rootNode.right.left = new Tree(15);
rootNode.right.right = new Tree(7);
 
const rootNode2 = new Tree(1);
rootNode2.left = null;
rootNode2.right = new Tree(2);
console.log(maximumDepth(rootNode)); //O/P:- 3
console.log(maximumDepth(rootNode2));//O/P:-2
