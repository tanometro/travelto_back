require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf`

const LocationModel = require('../models/Locations');
const AttractionModel = require('../models/Attractions');
const UserModel = require('../models/Users');
const CommentModel = require('../models/Comments');
const CompraModel = require('../models/Compras');
const RoleModel = require('../models/Roles');
const PaymentModel = require('../models/Payments')

const dataBase = new Sequelize(
  url,
  {
    logging: false,
    native: false,
  })

/* const dataBase = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  })
 */
LocationModel(dataBase)
AttractionModel(dataBase)
UserModel(dataBase)
CommentModel(dataBase)
CompraModel(dataBase)
RoleModel(dataBase)
PaymentModel(dataBase)

const { Location, Attraction, User, Comment, Compra, Role, Payment } = dataBase.models

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
// User.belongsToMany(Role, {through: 'UserRole'})
// User.belongsTo(Role, {foreignKey: 'roleID'})

//TODO: User - Location
User.belongsToMany(Location, { through: 'Destination' })

//TODO: User - Compra
User.belongsToMany(Compra, { through: 'Reservas' })

//TODO: User - Pagos
User.belongsToMany(Payment, { through: 'Reservas' })

//! Relaciones ------------------------------------------------------------

module.exports = {
  Location,
  Attraction,
  User,
  Comment,
  Compra,
  Role,
  Payment,
  // exportar todas los modelos con dataBase.models es indiferente
  conn: dataBase,

}
