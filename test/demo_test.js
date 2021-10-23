const mocha = require('mocha') //mocha works even without importing it
const assert = require('assert')
//describe tests
describe('demo test', () => {
    //create tests
    it('adds two numbers', () => {
        assert(2 + 3 === 5)
    })
})