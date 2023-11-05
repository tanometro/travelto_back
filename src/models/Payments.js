const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Payment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    currency_id: {
        type: DataTypes.INTEGER,
    },
    picture_url: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    unit_price: {
        type: DataTypes.INTEGER,
    },
    payerName: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
}, {timestamp: false})
}

// !! Identification es objeto con esas dos propiedades 
// Agregar
// identification: {
//     type: DNI,
//     number: identification.number,
// },