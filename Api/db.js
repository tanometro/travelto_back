require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf`

const LocationsModel = require('./src/models/Locations')
const AttractionsModel = require('./src/models/Attractions')
const UsersModel = require('./src/models/Users')
const CommentsModel = require('./src/models/Comments')
const ComprasModel = require ('./src/models/Compras')

const dataBase = new Sequelize(
  url, {
    logging: false,
    native: false,
  }) 

LocationsModel(dataBase)
AttractionsModel(dataBase)
UsersModel(dataBase)
CommentsModel(dataBase)
ComprasModel(dataBase)

const { Location, Attraction, User, Comment, Compra } = dataBase.models

//! Relaciones faltantes de 1 a 1. Revisar.
LocationsModel.belongsToMany(Attraction, {through: 'TouristAttractions'})
AttractionsModel.belongsToMany(Comment, {through: 'CommentAttraction'})
UsersModel.belongsToMany(Location, { through: 'Destination'})
UsersModel.belongsToMany(Compra, {through: 'Reservas'})



module.exports = {
  LocationsModel,
  AttractionsModel,
  UsersModel,
  CommentsModel,
  ComprasModel,
// exportar todas los modelos con dataBase.models es indiferente
  conn: dataBase,

}