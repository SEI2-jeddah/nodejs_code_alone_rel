const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
      // passReqToCallback: true
    },
    (email, password, done) => {
      User.findOne(
        {
          email: email
        },
        function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "User doesnt exist" });
          }

          user.verifyPassword(password, user.password, (err, match) => {
            if (err) {
              return done(null, false, { message: "somethings wrong" });
            }

            if (!match) {
              return done(null, false, { message: "passwords dont match" });
            }

            return done(null, user);
          });
        }
      );
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
