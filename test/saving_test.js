const mocha = require('mocha') //mocha works even without importing it
const assert = require('assert') //node.js built in module for testing
const MarioChar = require('../models/mariochar.js')

describe('Saving records', () => {
    //create tests
    it('Saves a record to the db', (done) => {

        let char = new MarioChar({
            name: 'Mario'
        })

        char.save().then(() => {
            assert(char.isNew === false) //false means it is no longer new, we have saved this into the db
            done()
        })

        
    })
})