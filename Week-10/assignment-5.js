
function findJudge(trust = [],n){
    let tempArr = new Array(n+1).fill(0);
    for(let [a,b] of trust){
        tempArr[a]--;
        tempArr[b]++;
    }
    for(let i=1;i<n+1;i++){
        if(tempArr[i]==n-1){
            return i;
        }
    }
    return -1
}
const arr = [[1,2]];
const arr2 = [[1,3],[2,3],[3,1]]
console.log(findJudge(arr,2)); //2
console.log(findJudge(arr2,3));//-1