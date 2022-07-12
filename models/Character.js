const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
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
    char_str: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    char_dex: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    char_int: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    char_luk: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    char_gold: {
        type: DataTypes.INTEGER,
        
    },
    char_level: {
        type: DataTypes.INTEGER,
        
    },
    char_has_excalibur: {
        type: DataTypes.STRING,
        
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
    modelName: 'character',
  }
);

module.exports = Character;