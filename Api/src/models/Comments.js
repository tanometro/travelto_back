const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  dataBase.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
}, {timestamp: false})
}