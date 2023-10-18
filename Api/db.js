require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf`

const Locations = require('./src/models/Locations')
const Attractions = require('./src/models/Attractions')
const Users = require('./src/models/Users')
const Comments = require('./src/models/Comments')
const Compras = require ('./src/models/Compras')

const dataBase = new Sequelize(
  url, {
    logging: false,
    native: false,
  }) 

Locations(dataBase)
Attractions(dataBase)
Users(dataBase)
Comments(dataBase)
Compras(dataBase)

const { Location, Attraction, User, Comment, Compra } = dataBase.models

//! Relaciones faltantes de 1 a 1. Revisar.
Location.belongsToMany(Attraction, {through: 'TouristAttractions'})
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