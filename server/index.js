const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const db = require('./models');

const app = express();
db.sequelize.sync();
const userAPIRouter = require('./routes/user');
const commentAPIRouter = require('./routes/comment');
const commentsAPIRouter = require('./routes/comments');
const hashtagAPIRouter = require('./routes/hashtag');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('익스프레스 안녕~');
});

app.use('/api/user', userAPIRouter);
app.use('/api/post', commentAPIRouter);
app.use('/api/posts', commentsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(3005, () => {
  console.log('서버가 작동중이에요! http://localhost:3005');
});
