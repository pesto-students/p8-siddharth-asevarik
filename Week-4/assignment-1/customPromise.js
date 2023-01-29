function getNumber(resolve, reject) {
    let number = Math.floor(Math.random() * 100)
    if (number % 5 == 0) {
        return reject('divisible by  5')
    } else {
        return resolve('not divisible by 5')
    }
}
getNumber((value) => {
    console.log(value);
},
(error)=>{
    console.log(error);
}
)