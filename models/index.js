const Character = require('./Character');
const Monster = require('./Monster');
const CharClass = require('./Character-class');
const Users = require('./Users');


CharClass.belongsto(Character, {
    foreignKey: 'char_class'
})

Character.hasOne(CharClass, {
    foreignKey: 'char_class'
})


module.exports = {
    Character,
    Monster,
    Users,
    CharClass,
  };
