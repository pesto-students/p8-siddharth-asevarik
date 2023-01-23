//Optimized solution
const hasDuplicate = (arr)=> arr.length !== new Set(arr).size

//another  solution without set
const hasDuplicate2 = (arr)=>{
   const sortedarr =  arr.sort((a,b)=>a-b)
    for(let i = 1;i<sortedarr.length-1;i++){
        if(sortedarr[i]===sortedarr[i-1]){
            return true;
        }
    }
    return false;
}

console.log(hasDuplicateBruteForce([1,2,3,2]));