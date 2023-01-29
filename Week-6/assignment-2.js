class Stack{
    constructor(){
        this.stack = []
        this.size = 3
    }
    push(element){
        if(this.size === this.stack.length){
            return "stack overflow"
        }
       return this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "no element in the stack"
        }
        this.size -= 1
       return this.stack.pop()
    }
    isEmpty(){
        return this.size === 0
    }
}




function spiralTraversal(arr) {
    let stack = new Stack()
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(i%2 !== 0){
            for(let j = 0;j<arr[i].length;j++){
                stack.push(arr[i][j]);
                console.log(arr[i][j]);
            }
            while (!stack.isEmpty()) {
                result.push(stack.pop())
            }
        }else{
            for(let j = 0;j<arr[i].length;j++){
                result.push(arr[i][j]);
            }
        }
    }
    return result
}
module.exports = spiralTraversal
