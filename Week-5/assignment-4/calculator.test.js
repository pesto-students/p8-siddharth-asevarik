const calculator = require('./calculator')
test('Calculator Addition Operation 22+22 = 44',()=>{
    expect(calculator(22,22,"+")).toBe(44)
})
test('Calculator Substraction Operation 32-25 = 7',()=>{
    expect(calculator(32,25,"-")).toBe(7)
})
test('Calculator Multiplication Operation 2*3 = 6',()=>{
    expect(calculator(2,3,"*")).toBe(6)
})
test('Calculator Division Operation 25/5 = 5',()=>{
    expect(calculator(25,5,"/")).toBe(5)
})