const passport = require('passport');
const db = require('../models');
const local = require('./local');
const kakao = require('./kakao');

module.exports = () => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        include: [{
          model: db.Comment,
          as: 'Comments',
          attributes: ['id'],
        }, {
          model: db.User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: db.User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
  local();
  kakao();
};
