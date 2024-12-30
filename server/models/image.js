const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    prompt: {
        type: String
    },
    size: {
        type: String
    },
    style: {
        type: String
    },
    isSaved: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    author: {
        ownerId: 
        {
            type: String
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        },
        
    },
    mycollections: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usercollection" 
    }],
}, { timestamps: true })



const Image = mongoose.model("Image", imageSchema)

module.exports = Image;