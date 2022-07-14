const Character = require('./Character');
const Monster = require('./Monster');
const Game = require('./Game');
// const Users = require('./Users');
const User = require('./User');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Game, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Game.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
    Character,
    Monster,
    User,
    Game,
  };

