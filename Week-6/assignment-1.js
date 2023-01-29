// Find the contiguous subarray within an array, 
// A of length N which has the largest sum.Input Format:The first and the only argument contains an integer array, 
// A. Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 
// For example:Input 1: A = [1, 2, 3, 4, -10]Output 1: 10
// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6
// Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6
function maxSum(arr){
 let curr_sum = 0,max_sum = Number.MIN_VALUE
    for(let i=0;i<arr.length;i++){
        curr_sum +=arr[i];
        if(curr_sum<0){
            curr_sum=0;
        }
        max_sum = Math.max(curr_sum,max_sum);
    }
    return max_sum
}

module.exports = maxSum;