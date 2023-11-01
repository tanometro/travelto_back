const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
  dataBase.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamp: false });
};