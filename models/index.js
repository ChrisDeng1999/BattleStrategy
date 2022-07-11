const Character = require('./Character-info');
const Monster = require('./Monster');
const CharClass = require('./Character-class');
// const Users = require('./Users');
const User = require('./User');


CharClass.belongsTo(Character, {
    foreignKey: 'char_class'
})

Character.hasOne(CharClass, {
    foreignKey: 'char_class'
})


module.exports = {
    Character,
    Monster,
    // Users,
    CharClass,
    User,
  };

