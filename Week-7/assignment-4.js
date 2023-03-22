var buckets = require('buckets-js');

function paranthesisChecker(str) {
    const stack = new buckets.Stack();
    for (let i = 0; i < str.length; i++) {
        if(str[i]=="{" || str[i]=="(" || str[i]=="["){
            stack.push(str[i]);
        }else{
            if(stack.isEmpty())return false;
            const stackchar = stack.pop();
            if(str[i]==")" && stackchar!="("){
                return false
            }
            if(str[i]=="}" && stackchar !="{"){
                return false
            }
            if(str[i]==")" && stackchar !="("){
                return false
            }
        }
    }
    if(stack.isEmpty()){
        return true;
    }
    return false;
}

const case1 = "{([])}"
console.log(paranthesisChecker(case1)) //O/P:true
const case2 = "{([)}"
console.log(paranthesisChecker(case2)) //O/P:false

