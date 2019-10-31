/**
 * 테이블 : Comments
*/
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', //  한글+이모티콘
    collate: 'utf8mb4_general_ci',
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.hasMany(db.Comment);
    db.Comment.hasMany(db.Image);
    db.Comment.belongsToMany(db.Hashtag, { through: 'CommentHashtag' });
    db.Comment.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
  };
  return Comment;
};
