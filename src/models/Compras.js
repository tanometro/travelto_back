const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Compra",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attractionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantidadEntradas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamp: false }
  );
};
