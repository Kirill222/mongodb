const MarioChar = require('../models/mariochar.js')

describe('Updating records', function() {

    
    let char
    
    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50,
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

    //increment update
    it('Increments the weight by 1', function(done) {

        MarioChar.update({}, {$inc: {weight: 1}}).then(function() {
            MarioChar.findOne({name: 'Mario'}).then(function(result) {
                assert(result.weight === 51)              
            })
        }) 
        done() 
     })
  
})