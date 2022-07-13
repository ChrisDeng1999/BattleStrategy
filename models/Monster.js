const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model {}

Monster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monster_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monster_class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monster_health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_gold: {
      type: DataTypes.INTEGER,
    
    },
    monster_strength: {
      type: DataTypes.INTEGER,
   
    },
    monster_xp: {
      type: DataTypes.INTEGER,
  
    },
    monster_sprite: {
      type: DataTypes.INTEGER,
 
    },
    is_boss: {
      type: DataTypes.BOOLEAN,
  
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'monster',
  }
);

module.exports = Monster;
