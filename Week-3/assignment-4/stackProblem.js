//Refactor the above stack implementation, using the concept of closure,
//such that there is noway to access items array outside of createStack() function scope: (2-3 hours)

//* Solution
function createStack() {
    const arr = []
    return {
        push(item) {
            arr.push(item);
        },
        pop() {
            return arr.pop();
        },
        top(){
            return arr[arr.length-1];
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.items);// => undefined
console.log(stack.top());
console.log(stack.pop());// => 5

