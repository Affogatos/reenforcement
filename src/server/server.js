require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
};
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    maxAge: 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serialize user called');
  console.log('in serialize: ', user.id);
  done(null, user.id);
});
// deserialize user from user id when attempting to authorize requests with a cookie
passport.deserializeUser((id, done) => {
  console.log('id: ', id);
  const user = {};
  user.id = id;
  console.log('​user', user);
  done(null, user.id);
});
passport.use(
  new GoogleStrategy(
    {
      //credentials from Google + api (dev console), D in "ID" must be capitalized
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //callbackURL is where to direct user once back from google
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // check db here
      const user = profile;
      console.log('userid in passport.use', user.id);
      done(null, user);
    }
  )
);

app.get('/test', (req, res) => res.json('test'));

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.cookie('uuid', req.session.passport.user);
  res.redirect(302, 'http://localhost:8080/dashboard');
});

// app.get('/api/current_user', (req, res) => {
//   console.log('current user');
//   console.log(req.cookies);

//   res.send(req.user); // req.user generated from cookie session and passport
// });

// app.get('/is-authenticated', (req, res) => res.send('resssss'));
app.listen(port, () => console.log(`server listening on port ${port}...`));
app.post('/is-authenticated', (req, res) => {
  const { uuid } = req.body;
  //should get this from db

  let userData;
  console.log(uuid);
  if (uuid === '106177121669500992155') {
    userData = {
      name: 'Brendan Morrell',
      uuid,
      favorites: [],
      age: 29,
      isAuthenticated: true,
    };
  }
  res.status(200).json(userData);
});
app.get('/logout', (req, res) => {
  req.logout();
  res.send();
});
// // set up a client from the pool, and make a query using that client
// console.log('starting deserialize user');
// const user = null;
// // const queryText = 'select * from users where id = $1';
// // pool.query(queryText, [id]).then(result => {
// //   const user = result.rows[0];
// //   console.log('deserialize main result: ');
// //   console.log(user.id);

// // passport deserialize complete
// done(null, user);
// // });
