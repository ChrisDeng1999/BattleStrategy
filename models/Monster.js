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
    monster_health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_gold: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_xp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_sprite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_boss: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gallery',
  }
);

module.exports = Monster;
