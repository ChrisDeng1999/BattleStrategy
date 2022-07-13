const sequelize = require('../config/connection');
const { User, Monster } = require('../models');

const monsterData = require('./monsterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const monsters = await User.Create(monsterData, {
    individualHooks: true,
    returning: true,
  });
  //trying to create monsters
 
  for (const monster of monsterData) {
    await Monster.create({
      ...monster,
      monster_id: monsters[Math.floor(Math.random() * monsters.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
