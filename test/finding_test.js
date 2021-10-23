const MarioChar = require('../models/mariochar.js')

describe('Finding records', () => {

    //here we again create a document, so that we have smth to find. 
    //this code will run before the test
   beforeEach((done) => {

     let char = new MarioChar({
        name: 'Mario'
    })
    char.save().then(() => {
        assert(char.isNew === false)  
        done()
    })

    done()


   })
   //test itself
    it('Finds one record from the db', (done) => { 
               
        MarioChar.findOne({name: 'Mario'}).then((result) => {
            assert(result.name === 'Mario')  
            done()
        })

        done()
        
    })
})