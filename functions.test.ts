const {shuffleArray} = require('./utils')
const { bots } = require('./data')

describe('shuffleArray should', () => {
    const shuffled = shuffleArray(bots)
    const choices = shuffled.slice(0, 5)
    
    test('shuffleArr should be an Array', () =>{
        expect(typeof shuffled).toEqual('object')
    })

    test('shuffleArray should have a length of 5', () => {
        expect(choices).toHaveLength(5)
    })
})