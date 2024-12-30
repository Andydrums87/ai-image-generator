const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    googleId: { type: String },
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    mycollections: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usercollection" 
    }],
    images: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Image"
    }],

})

const User = mongoose.model("User", userSchema)

module.exports = User;