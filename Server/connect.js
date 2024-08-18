const mongoose = require('mongoose')

const connectToDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/myw').then(() => console.log('MongoDb connected'))
    }
    catch(e){
        console.log('error connecting db');
    }
}

module.exports = { connectToDB }