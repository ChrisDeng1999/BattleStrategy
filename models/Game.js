const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    char_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    char_class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    char_health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    char_attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monster_name: {
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
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;