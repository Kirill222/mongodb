const MarioChar = require('../models/mariochar.js')

describe('Finding records', () => {

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
   //test: findOne()
    it('Finds one record from the db', (done) => { 
               
        MarioChar.findOne({name: 'Mario'}).then((result) => {
            assert(result.name === 'Mario')  
        })
        done()        
    })

    //test: find by ID
    it('Finds a record by ID', (done) => { 
               
        MarioChar.findOne({_id: char._id}).then((result) => {
            assert(result._id.toString() === char._id.toString())  //toString - because mongodb's id is an object
        })
        done()        
    })
})