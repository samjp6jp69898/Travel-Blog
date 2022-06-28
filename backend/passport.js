const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "575148283458-488l4eqaggno7p89haoq2kj5vodggoti.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
   
  }
));


passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
});