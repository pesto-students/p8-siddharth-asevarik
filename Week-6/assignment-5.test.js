const pairWithGivenSum = require('./assignment-5')
const arr1 = [5, 10, 3, 2, 50, 80] 
const arr2 = [-10, 20]
test('should return true', () => {
    expect(pairWithGivenSum(arr1,78)).toBe(true)
})

test('should return true', () => {
    expect(pairWithGivenSum(arr2,30)).toBe(true)
})
