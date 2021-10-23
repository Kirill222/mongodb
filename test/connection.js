const mongoose = require('mongoose')

//ES6 promises
mongoose.Promise = global.Promise

//connect to the db before tests run
before((done) => {
    //connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo') //testaroo - the name of the DB. If it does not exist - mongoose creates it

    mongoose.connection.once('open', () => {
        console.log('connection has been made...')
        done()
    }).on('error', (error) => {
        console.log('Connection error:', error)
    })
})

