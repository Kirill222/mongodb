const mongoose = require('mongoose')

//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo') //testaroo - the name of the DB. If it does not exist - mongoose creates it

mongoose.connection.once('open', () => {
    console.log('connection has been made...')
}).on('error', (error) => {
    console.log('Connection error:', error)
})