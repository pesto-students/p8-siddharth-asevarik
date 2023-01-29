// write a function to sort the array of zeros and ones
//in acending

function sortZerosOnes(arr){
    let zeros=0,ones=0,twos=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zeros++;
        }else if (arr[i]===1){
            ones++;
        }else if(arr[i]===2){
            twos++;
        }
    }
    for(let i =0;i<arr.length;i++){
        if(zeros > 0){
            arr[i] = 0;
            zeros--;
        }else if(ones > 0){
            arr[i] = 1
            ones--;
        }else{
            arr[i] = 2
            twos--;
        }
    }
    return arr
}
module.exports = sortZerosOnes