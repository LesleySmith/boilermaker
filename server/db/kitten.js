const Sequelize = require('sequelize');
const db = require('./database');

const Kitten = db.define('kitten', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://robohash.org/lesley?set=set4'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  temperment: {
    type: Sequelize.STRING,
    allowNull: true,
  }
})

module.exports = Kitten;
