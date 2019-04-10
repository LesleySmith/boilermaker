const db = require('./database')
const Kitten = require('./kitten')
const User = require('./user')

Kitten.belongsTo(User)
User.hasMany(Kitten)

module.exports = {
  db,
  Kitten,
  User,
}
