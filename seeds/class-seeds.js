const { Character } = require('../models');

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

const seedClasses = () => Category.bulkCreate(characterClass);

module.exports = seedClasses;