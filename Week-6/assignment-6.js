//Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, 
//target.Return the sum of the three integers.
//Assume that there will only beone solutionExample: 
//given array S = {-1 2 1 -4}, and target = 1. 
//The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)


function three_sum(arr,target){
    arr.sort((a,b)=>a-b)
    let closestSum = Infinity
    for(let i = 0;i<arr.length;i++){
        let ptr1=i+1 , ptr2=arr.length -1;
        while (ptr1<ptr2) {
            let sum = arr[i]+arr[ptr1] +arr[ptr2]
            if(sum === target){
                return sum
            }
            if(Math.abs(target-sum)<Math.abs(closestSum-target)){
                closestSum = sum;
            }
            if(sum>target){
                ptr2--;
            }else{
                ptr1++;
            }
        }
    }
    return closestSum
}

//the above code will have time complexity of O(n^2) and space complexity of O(1)
module.exports = three_sum