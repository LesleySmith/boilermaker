const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://robohash.org/lesley?set=set3',
  },
})

module.exports = User;
