const { DataTypes } = require('sequelize')

module.exports = (dataBase) => {
  dataBase.define('Location', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitud: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longitud: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prefijo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cp: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {timestamp: false})
}