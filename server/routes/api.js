const express = require("express");
const router = express.Router();
const { fetchCollection, fetchCollections } = require("../controllers/userCollectionController")
const { 
    createImage, 
    addImage, 
    deleteImage, 
    searchImages, 
    fetchImage, 
    fetchImages, 
    fetchAllImages } = require("../controllers/imageController")



router.get('/image/:id', fetchImage)
router.get('/images/:id', fetchImages)
router.post('/search', searchImages)
router.get('/collection/:id', fetchCollection)
router.get('/collections/:id', fetchCollections)
router.get('/allImages/results', fetchAllImages)
router.post('/create', createImage)
router.post('/create/image/:id', addImage)
router.delete("/delete/image/:id", deleteImage)

module.exports = router




