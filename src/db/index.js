require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf`

const LocationModel = require('../models/Locations');
const AttractionModel = require('../models/Attractions')
const UserModel = require('../models/Users')
const CommentModel = require('../models/Comments')
const CompraModel = require ('../models/Compras')
const RoleModel = require('../models/Roles')

const dataBase = new Sequelize(
  url,
    {
      logging: false,
      native: false,
    }) 

// const dataBase = new Sequelize(
//   DB_DEPLOY,
//   {
//     logging: false,
//     native: false,
//   }) 

LocationModel (dataBase)
AttractionModel (dataBase)
UserModel (dataBase)
CommentModel(dataBase)
CompraModel (dataBase)
RoleModel(dataBase)

const { Location, Attraction, User, Comment, Compra, Role } = dataBase.models

//! Relaciones ------------------------------------------------------------
//TODO: Location - Attraction
Attraction.belongsTo(Location)
Location.hasMany(Attraction) // Relacion de 1 locacion a muchas atracciones

//TODO: User - Comment
Comment.belongsTo(User)
User.hasMany(Comment) // Relacion de 1 Usuario a muchos comentarios

//TODO: Comment - Attraction
Comment.belongsTo(Attraction)
Attraction.hasMany(Comment) // Relacion de 1 Atraccion a muchos comentarios

//TODO: User - Role
User.belongsToMany(Role, {through: 'UserRole'})
User.belongsTo(Role, {foreignKey: 'roleId'})

//TODO: User - Location
User.belongsToMany(Location, { through: 'Destination'})

//TODO: User - Compra
User.belongsToMany(Compra, {through: 'Reservas'})

//! Relaciones ------------------------------------------------------------

module.exports = {
  Location,
  Attraction,
  User,
  Comment,
  Compra,
  Role,
// exportar todas los modelos con dataBase.models es indiferente
  conn: dataBase,

}
