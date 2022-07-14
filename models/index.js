const Character = require('./Character');
const Monster = require('./Monster');
const User = require('./User');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = {
    Character,
    Monster,
    User,
  };

