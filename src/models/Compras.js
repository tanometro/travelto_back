const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  dataBase.define('Compra', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {timestamp: false})
}