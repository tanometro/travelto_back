const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  dataBase.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    roleID: {
      type: DataTypes.INTEGER
    }
}, {timestamp: false})
}