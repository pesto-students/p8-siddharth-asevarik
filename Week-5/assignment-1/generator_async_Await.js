const { log } = require("console")

//* Tasks using async/await
async function todotask1(){
    return "Task1 completed"
}
async function todotask2(){
    return "Task2 completed"
}
async function todotask3(){
    return Promise.resolve("Task3 completed")
}
async function tasksExecutor() {
    let task1 = await todotask1()
    let task2 = await todotask2()
    let task3 = await todotask3()
    console.log(task1,task2,task3);
}
//Tasks using async await
tasksExecutor()


//Task functionality using generators
function * gentask(){
    let i = 0
// yields task like Async functions
  const res1 =  yield todotask1()
  console.log(res1);
  const res2 =  yield todotask2()
  console.log(res2);
  const res3 = yield todotask3()
  console.log(res3);
}
// runner function to resolve the promises 
function runner(genFunc) {
    const itr = genFunc();
    function run(arg){
        const result = itr.next(arg)
        if(result.done){
            return result.value
        }else{
            return Promise.resolve(result.value).then(run)
        }
    }
    return run();
}
runner(gentask)
