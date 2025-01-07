const Image = require("../models/image")
const UserCollection = require("../models/userCollection")
const OpenAI = require("openai");
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dghzq6xtd",
    api_key: "388844636378436",
    api_secret: "dW7NnZbyMAtfVRR5-gdyAL8-9mE"
})

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});


const createImage = async (req, res) => {
    const { prompt, size, style } = req.body;
    try {
      const response = await openai.images.generate({
        prompt,
        style,
        size,
        n: 1,
        model: 'dall-e-3',
        response_format: "b64_json"
      });
      const imgSrc = `data:image/jpeg;base64,${response.data[0].b64_json}`;

      res.status(200).send({ image_url: imgSrc })

    } catch (err) {
      console.log(err)
    }
  }

  const uploadImage = async (req, res) => {
    const { imgSrc } = req.body
    console.log(imgSrc)
    try {
      const result = await cloudinary.uploader.upload(imgSrc, {
        overwrite: true,
        invalidate: true,
        secure: true,
        public_id: `${Date.now()}`,
      });
     const image = await Image.create({
        imageUrl: result.secure_url,
        prompt,
        size,
        style,
        user: req.user._id || undefined,
        author: {
          ownerId: req.user._id || undefined,
          name: req.user.name || undefined,
          avatar: req.user.avatar || undefined,
        }
      })
  res.status(200).send({
  image_url: imgSrc,
  size: size,
  image
});
    }
  
          
           catch (err) {
            res.send(err.message);
          }
  
        }  
//     const imgSrc = `data:image/jpeg;base64,${response.data[0].b64_json}`;
//       const result = await cloudinary.uploader.upload(imgSrc, {
//               overwrite: true,
//               invalidate: true,
//               secure: true,
//               public_id: `${Date.now()}`,
//             });
//            const image = await Image.create({
//               imageUrl: result.secure_url,
//               prompt,
//               size,
//               style,
//               user: req.user._id || undefined,
//               author: {
//                 ownerId: req.user._id || undefined,
//                 name: req.user.name || undefined,
//                 avatar: req.user.avatar || undefined,
//               }
//             })
//         res.status(200).send({
//         image_url: imgSrc,
//         size: size,
//         image
//       });
    
//     } catch (err) {
//       res.send(err.message);
//     }
// }

const addImage = async (req, res) => {
  const userId  = req.body
  const imageId = req.params.id
  try {
    const image = await Image.find({ _id: imageId  })
    const collection = await UserCollection.create({
        originalId: image[0]?._id,
        imageUrl: image[0]?.imageUrl,
        prompt: image[0]?.prompt,
        style: image[0]?.style,
        size: image[0]?.size,
        user: userId?.auth,
        isSaved: true,
        author: {
          ownerId: userId?.auth,
          name: image[0]?.author.name,
          avatar: image[0]?.author.avatar
        }
    })
    res.json({ collection })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const deleteImage = async (req, res) => {
  try {

    const imageId = req.params.id;
    const userId = req.body

    await UserCollection.deleteOne({  originalId: imageId })
    
    res.json({ message: "deleted" })

    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

const fetchImage = async (req, res) => {
  const imageId = req.params.id
  try {
    const image = await Image.findOne({ _id: imageId })
    res.json({ image })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const searchImages = async (req, res) => {
  const keyword = req.query.q || "";
  const sort = req.query.sort || "createdAt";
  const order = req.query.order || "desc"

  try {
    const limit = parseInt(req.query.limit) || 8;
    const startIndex = parseInt(req.query.startIndex) || 0;

    const images = await Image.find({
      prompt: { $regex: keyword, $options: "i"},
    })
    if(!images) {
      res.status(400).send({ message: "No Images Found"})
    }
    res.json({ images })
  } catch (err) {
    res.status(400).send({ message: "no images found"})
    console.log(err)
  }
}

const fetchImages = async (req, res) => {
  const userId = req.params.id

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const total = await Image.countDocuments({ user: userId })
  
  const offset = (page - 1) * limit
  

  try {
    const images = await Image.find({ user: userId })
    .sort({ createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .exec();
    res.json({ images, total: total })
  } catch (err) {
    res.status(400)
    console.log(err)
  }
}

const fetchAllImages = async (req, res) => {

  try {
 
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const total = await Image.countDocuments()
    const offset = (page - 1) * limit
    const pages = Math.ceil(total / limit);

    const images = await Image.find({})
    .populate("user")
    .sort({ createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .exec();
    res.json({ images, total: total })
  } catch (err) {
    res.status(400)
    console.log(err)
  }
}

module.exports = { 
  createImage, 
  uploadImage,
  addImage, 
  deleteImage, 
  searchImages, 
  fetchImage, 
  fetchImages, 
  fetchAllImages 
}