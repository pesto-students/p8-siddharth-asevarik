// 1.What is the output of the below problem and why:
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged? 
//* answer:0
//* Reason: Count is zero is logged because when log is called its call the value of message which is already calculated to 0 is 
//* when message variable  created  which is zero even if the increment is called 3 times the current count value is 3 but in message
//* variable it's 0 that's why it's showing zero