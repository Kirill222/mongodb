const MarioChar = require('../models/mariochar.js')

describe('Deleting records', () => {

    let char
    
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(() => {
            assert(char.isNew === false)  
        })
        done()        
    })

    it('Deletes one record from the db', (done) => {

        MarioChar.findOneAndRemove({name: 'Mario'}).then(() => {
            MarioChar.findOne({name: 'Mario'}).then((result) => {
                assert(result === null)
            })
        }) 
        done()

    })
  
})