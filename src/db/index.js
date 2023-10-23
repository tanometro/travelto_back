require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf`

const LocationModel = require('../models/Locations');
const AttractionModel = require('../models/Attractions')
const UserModel = require('../models/Users')
const CommentModel = require('../models/Comments')
const CompraModel = require ('../models/Compras')

const dataBase = new Sequelize(
  url, {
    logging: false,
    native: false,
  }) 

LocationModel(dataBase)
AttractionModel(dataBase)
UserModel(dataBase)
CommentModel(dataBase)
CompraModel(dataBase)

const { Location, Attraction, User, Comment, Compra } = dataBase.models

//! Relaciones faltantes de 1 a 1. Revisar.
Location.belongsToMany(Attraction, {through: 'TouristAttractions'})
Attraction.belongsToMany(Comment, {through: 'CommentAttraction'})
User.belongsToMany(Location, { through: 'Destination'})
User.belongsToMany(Compra, {through: 'Reservas'})

module.exports = {
  LocationModel,
  AttractionModel,
  UserModel,
  CommentModel,
  CompraModel,
// exportar todas los modelos con dataBase.models es indiferente
  conn: dataBase,

}
