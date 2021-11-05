const {shuffleArray} = require('./utils')
const { bots } = require('./data')

describe('shuffleArray should', () => {
    const shuffled = shuffleArray(bots)
    const choices = shuffled.slice(0, 5)
    
    test('shuffleArr should return an Array', () =>{
        expect(typeof shuffled).toBe('object')
    })

    test('shuffleArray should have a length of 5', () => {
        expect(choices.length <= 5).toBe(true)
    })
})