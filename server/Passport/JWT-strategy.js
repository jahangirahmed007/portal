const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');



const Model = require('../Models/AdminModel');
const agentModal = require('../Models/AgentsModel');


const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();

opts.secretOrKey = "jahangir";
module.exports = passport => {
    passport.use(
        new JWTStrategy(opts, (jwt_payload, done) => {
            Model.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user)
                    }
                    return done(null, false)
                })
                .catch(err => console.error(err))
        })
    );

}