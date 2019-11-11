const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

const db = require('../models');

module.exports = () => {
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/auth/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await db.User.findOne({ where: { nickname: profile.id } });
      if (user) {
        done(null, user);
      } else {
        const newUser = await user.create({
          nickname: profile.displayName,
        });
        done(null, newUser);
      }
    } catch (e) {
      console.error(e);
      return done(e);
    }
  }));
};
