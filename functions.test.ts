const {shuffleArray} = require('./utils')
let array = [1,2,3,4,5]
let shuffledArr = shuffleArray(array)
describe('shuffleArray should', () => {
    it('should return an array of the same length',()=>{
        expect(shuffledArr).toHaveLength(array.length)
    })
    it('should contain the same items',()=>{
        for (let i = 0; i < array.length; i++) {
            expect(shuffledArr).toContain(array[i])
        }
    })
})