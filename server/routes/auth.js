const express = require('express');
const passport = require('passport');

const router = express.Router();

console.log('hi kakao');
router.post('/kakao/value', (req, res) => {
  console.log('server');
  console.log(req.body);
  return res;
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;
