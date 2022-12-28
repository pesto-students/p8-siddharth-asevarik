/* Exercise 3.1:
Create a memoize function that remembers previous inputs and stores them in cache so that it 
won’t have to compute the same inputs more than once. The function will take an unspecified 
number of integer inputs and a reducer method.(1.5hours)
*/

//*Solution:
//Memoize Function
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString()
        if (cache.has(key)) {
            return cache.get(key)
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}
//Helper function to calculate time 
function time(fn) {
    console.time()
    fn()
    console.timeEnd()
}

//Given reducer method:
function add(a = 0, b = 0) {
    return a + b;
}




//method called memoize to store cache:
const memoizeAdd = memoize(add);
//then calling...
time(() => memoizeAdd(100, 100))
console.log(memoizeAdd(100, 100))//returns 200
time(() => memoizeAdd(100))
console.log(memoizeAdd(100))//returns 100
time(() => memoizeAdd(100, 200))
console.log(memoizeAdd(100, 200))//returns 300
time(() => memoizeAdd(100, 200))
console.log(memoizeAdd(100, 100))//returns 200 without computing
