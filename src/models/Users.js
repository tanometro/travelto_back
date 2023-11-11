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
      type: DataTypes.STRING,
<<<<<<< HEAD
=======
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
>>>>>>> 98e3cc5ed6917982bf091abe6c98dd8bde1c6ff4
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googlePass: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    roleID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, { timestamps: false })
}