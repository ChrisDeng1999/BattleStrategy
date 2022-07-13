const sequelize = require('../config/connection');
const { User, Monster } = require('../models');

const monsterData = require('./monsterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const monsters = await Monster.Create(monsterData, {
    individualHooks: true,
    returning: true,
  });
  //trying to create monsters
 
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
