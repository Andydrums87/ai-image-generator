const UserCollection = require("../models/userCollection")
const Image = require("../models/image")

const fetchCollection = async (req, res) => {
    const imageId = req.params.id
    try {
      const image = await Image.findOne({ _id: imageId })
      res.json({ image })
    } catch (err) {
      console.log(err)
      res.sendStatus(400)
    }
  }

  const fetchCollections = async (req, res) => {
    const userId = req.params.id
    try {
      const collection = await UserCollection.find({ user: userId })
      res.json({ collection })
    } catch (err) {
      console.log(err)
    }
  }

  module.exports = { 
    fetchCollections, 
    fetchCollection, 
    }