const arr = [1,2,0,2,0,1,0,2,0]
const arr2 =[0,1,0]
const arr3 =[0,2,1,2,0]
const sortZerosOnes = require('./assignment-3')
test('should sort arr in ascending order', () => { 
    expect(sortZerosOnes(arr)).toEqual([0,0,0,0,1,1,2,2,2])
 })
 test('should sort arr 2 in ascending order', () => { 
    expect(sortZerosOnes(arr2)).toEqual([0,0,1])
 })
 test("should sort arr 3 in ascending order",()=>{
    expect(sortZerosOnes(arr3)).toEqual([0,0,1,2,2])
 })