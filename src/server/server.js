const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
  //credentials from Google + api (dev console), D in "ID" must be capitalized
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  //callbackURL is where to direct user once back from google
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log('token', accessToken);
  console.log('refresh', refreshToken);
  console.log('profile', profile);
}
)
);

//string 'google' argument comes from internal strategy on GoogleStrategy, not explicit
module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})
);

app.get('/auth/google/callback', passport.authenticate('google'));


app.listen(8080);
}
