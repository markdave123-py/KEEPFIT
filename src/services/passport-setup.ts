import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from 'src/config/env';


passport.use ( 
    new GoogleStrategy(
        {
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3400/auth/google/callback",
    passReqToCallback: true

    
    }, (req, accessToken, refreshToken, profile, done) => {
         done (null, profile);

    }
   
    )   
);

passport.serializeUser((user, done) =>{
    done(null, user)
});

passport.deserializeUser((user:any, done) =>{
    done(null, user)
});