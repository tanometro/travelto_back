require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf`

const LocationModel = require('../models/Locations');
const AttractionModel = require('../models/Attractions')
const UserModel = require('../models/Users')
const CommentModel = require('../models/Comments')
const CompraModel = require ('../models/Compras')

// const dataBase = new Sequelize(
//   url,
//     {
//       logging: false,
//       native: false,
//     }) 

const dataBase = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  }) 

LocationModel (dataBase)
AttractionModel (dataBase)
UserModel (dataBase)
CommentModel(dataBase)
CompraModel (dataBase)

const { Location, Attraction, User, Comment, Compra } = dataBase.models

//! Relaciones faltantes de 1 a 1. Revisar.
Attraction.belongsTo(Location)
Location.belongsToMany(Attraction, {through: 'LocalAttractions'})
Attraction.belongsToMany(Comment, {through: 'CommentAttraction'})
User.belongsToMany(Location, { through: 'Destination'})
User.belongsToMany(Compra, {through: 'Reservas'})

module.exports = {
  Location,
  Attraction,
  User,
  Comment,
  Compra,
// exportar todas los modelos con dataBase.models es indiferente
  conn: dataBase,

}
