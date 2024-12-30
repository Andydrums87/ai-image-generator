require('dotenv').config()
const mongoose = require("mongoose")

async function connectToDb () {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("Connected to Db")
    } catch (err) {
        console.log(err)
    }
    }
   

module.exports = connectToDb;