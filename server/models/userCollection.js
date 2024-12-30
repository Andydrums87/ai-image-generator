const mongoose = require("mongoose")

const userCollectionSchema = new mongoose.Schema({
    originalId: {
        type: mongoose.Schema.Types.ObjectId
    },
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
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
   images: [{
      type: mongoose.Schema.Types.ObjectId, ref: "Image"
  }]
})

const Usercollection = mongoose.model("Usercollection", userCollectionSchema)

module.exports = Usercollection;