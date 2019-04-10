const { db } = require('./server/db')
const Kitten = require('./server/db/kitten')
const User = require('./server/db/user')

const kittens = [{
  name: 'Smokey',
  breed: 'Main Coon',
  imageUrl: 'https://robohash.org/Smokey?set=set4',
  description: 'Pink cat with a blue bow and gray spots',
  temperment: 'Calm',
}, {
  name: 'Mitsu',
  breed: 'Blue-Point Siamese',
  imageUrl: 'https://robohash.org/Mitsu?set=set4',
  description: 'Blue cat with gray spots',
  temperment: 'Studious',
}, {
  name: 'Domino',
  breed: 'Mutt',
  imageUrl: 'https://robohash.org/Domino?set=set4',
  description: 'Pink with a top hat, curly fur',
  temperment: 'Entergetic',
}, {
  name: 'Charlie',
  breed: 'Persian',
  imageUrl: 'https://robohash.org/Charlie?set=set4',
  description: 'Light gray with dark gray spots',
  temperment: 'Lazy',
}];

const users = [{
  firstName: 'Lesley',
  lastName: 'Smith',
  email: 'lesley@lesley.com',
  imageUrl: 'https://robohash.org/Lesley?set=set3'
}, {
  firstName: 'Nick',
  lastName: 'Smith',
  email: 'nick@nick.com',
  imageUrl: 'https://robohash.org/Nick?set=set3',
}, {
  firstName: 'Natalie',
  lastName: 'LaPointe',
  email: 'natalie@nat.com',
  imageUrl: 'https://robohash.org/Natalie?set=set3'
}, {
  firstName: 'Jordan',
  lastName: 'LaPointe',
  email: 'jordan@jordan.com',
  imageUrl: 'https://robohash.org/Jordan?set=set3'
}, {
  firstName: 'Kelly',
  lastName: 'Koch',
  email: 'kelly@kelly.com',
  imageUrl: 'https://robohash.org/Kelly?set=set3'
}];

const seed = async () => {
  try {
    await db.sync({ force: true })
    .then(() =>
    Promise.all(kittens.map(kitten =>
    Kitten.create(kitten))
    ))
    .then(() =>
    Promise.all(users.map(user =>
    User.create(user))
  ))
  } catch (err) {
   console.log(err)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!!')
      db.close()
    })
    .catch(err => {
      console.error('Oh no! Something went wrong!')
      console.error(err)
      db.close()
    })
}
