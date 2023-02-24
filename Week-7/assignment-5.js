var buckets = require('buckets-js')
const arr = [6, 8, 0, 1, 3];

//naive solution O(n^2)
function nextGreaterElement(arr) {
    const res = []

    //naive solution o(n^2)
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                res.push(arr[j]);
                flag = true;
                break;
            }
        }
        if (!flag) {
            res.push(-1);
        }
    }
    return res;
}
//optimized solution
function nextLargerElementUsingMap(arr, n)
{
    var s = [];
      
    // iterating over the array
    for (var i = 0; i < arr.length; i++)
    {
        while (s.length > 0 && s[s.length - 1]["value"] < arr[i])
        {
            // updating the array as per the stack top
            var d = s.pop();
            arr[d["ind"]] = arr[i];
        }
        // pushing values to stack
        s.push({"value": arr[i], "ind": i});
    }
      
    // updating the array as per the stack top
    while (s.length > 0)
    {
        d = s.pop();
        arr[d["ind"]] = -1;
    }
    return arr;
      
}


console.log(nextLargerElementUsingMap(arr,arr.length));