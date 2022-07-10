const { Class } = require('../models');

const characterClass = [
  {
    class_name: 'Warrior',
  },
  {
    class_name: 'Hunter',
  },
  {
    class_name: 'Mage',
  },
  {
    class_name: 'Thief',
  },
];

const seedClasses = () => Class.bulkCreate(characterClass);

module.exports = seedClasses;