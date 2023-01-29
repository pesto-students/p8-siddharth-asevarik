let arr = [1, 2, 3, 4, -10]
let arr1 = [1, 2, 3, 4]
let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maxSumFunction = require('./assignment-1')
test('[1, 2, 3, 4, -10] maxsum must be 10', () => {
   expect(maxSumFunction(arr)).toBe(10)
 })

test('[1, 2, 3, 4] maxsum must be 10', () => {
   expect(maxSumFunction(arr1)).toBe(10)
 })
 test('[-2, 1, -3, 4, -1, 2, 1, -5, 4] maxsum must be 6', () => {
   expect(maxSumFunction(arr2)).toBe(6)
 })
