const {Sequelize, DataTypes} = require('sequelize')
const db = require('../db.js')
const sequelize = db.sequelize
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  
  module.exports = User
