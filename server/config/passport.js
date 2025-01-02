require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../models/user")
const passport = require("passport")

module.exports = function(passport) {

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
            scope: ['openid', 'profile', 'email'],
            // passReqToCallback: true,
            // proxy: true 
        },
        async (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if(existingUser) {
                    done(null, existingUser);
                } else {
                    new User({ 
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        avatar: profile.photos[0].value,
                    }).save().then(user => done(null, user))
                }
            });
        }));

        passport.use(
            new FacebookStrategy(
                {
                    clientID: process.env.FACEBOOK_APP_ID,
                    clientSecret: process.env.FACEBOOK_APP_SECRET,
                    callbackURL: process.env.FACEBOOK_CALLBACK,
                    profileFields: ['id', 'displayName', 'photos', 'emails', 'name']
                    // passReqToCallback: true,
                    // proxy: true 
                },
                async (accessToken, refreshToken, profile, done) => {
                    User.findOne({ googleId: profile.id }).then(existingUser => {
                        if(existingUser) {
                            done(null, existingUser);
                        } else {
                            new User({ 
                                googleId: profile.id,
                                name: profile.displayName,
                                email: profile.email,
                                avatar: profile.photos,
                            }).save().then(user => done(null, user))
                        }
                    });
                }));

passport.serializeUser((user, done) => {
    done(null,user.id)
})

passport.deserializeUser((id, done)=> {
    User.findById(id).populate({ path: "images", ref: "Image" }).then(user => {
        done(null, user)
    })
})

}