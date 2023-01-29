const spiralTraversal = require('./assignment-2')
let testData = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
let expectedData = [1,2,3,6,5,4,7,8,9]
test('sprialtraversal', () => {
    expect(spiralTraversal(testData)).toEqual(expectedData)
})