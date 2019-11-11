const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const commentAPIRouter = require('./routes/comment');
const commentsAPIRouter = require('./routes/comments');
const hashtagAPIRouter = require('./routes/hashtag');
const authAPIRouter = require('./routes/auth');

const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false, // https 일 경우에만 true 로 사용
  },
  name: 'cookie-name',
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('익스프레스 안녕~');
});

app.use('/api/user', userAPIRouter);
app.use('/api/post', commentAPIRouter);
app.use('/api/posts', commentsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);
app.use('/api/auth', authAPIRouter);

app.listen(3005, () => {
  console.log('서버가 작동중이에요! http://localhost:3005');
});
