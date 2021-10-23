const MarioChar = require('../models/mariochar.js')

describe('Updating records', function() {

    
    let char
    
    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(function() {
           
        })
        done() 
               
    })

    it('Updates one record from the db', function(done) {

       MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Yoshi'}).then(function(result) {
           MarioChar.findOne({_id: char._id}).then(function(result) {
               assert(result.name === 'Yoshi')              
           })
       }) 
       done()     

    })
  
})