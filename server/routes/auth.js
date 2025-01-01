const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['openid', 'profile', 'email']}))

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/'}), 
    (req, res) => {
        const { email } = req.body
        
        const user = User.findOne({ email })
  
        if(!user) return res.sendStatus(401)
     
            req.user = user;
        
        console.log(user)
        res.redirect('https://ai-image-generator-z95d.onrender.com/create')
    }
)
router.get("/login/sucess", async(req,res)=>{
    if(req.user){
        res.status(200).json({ isLoggedIn: true, user:req.user})
    }else{
        res.status(400).json({ isLoggedIn: false,})
    }
})

router.get("/check", (req, res, next) => {
    if(req.isAuthenticated()) {
        res.send({ isLoggedIn: true})
        return next()
        
    } else {
        res.send({ message: "error"})
    }
})
router.get("/logout", function(req, res, next){
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.status(200).send({ message: "logged out" });
    });
    console.log("logout")
  });
  


  module.exports = router;