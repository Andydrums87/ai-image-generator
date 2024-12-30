// const cloudinary = require("cloudinary").v2

// cloudinary.config({
//     cloud_name: "dghzq6xtd",
//     api_key: "388844636378436",
//     api_secret: "dW7NnZbyMAtfVRR5-gdyAL8-9mE"
// })

// const uploadToCloudinary = async (path, folder = "my-profile") => {
//     try {
//       const data = await cloudinary.uploader.upload(path, { folder: folder });
//     //   return { url: data.secure_url, publicId: data.public_id };
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   };
//   module.exports = { uploadToCloudinary }