const router = require('express').Router();
const Kitten = require('../db/kitten')
const User = require('../db/user')

// matches GET requests to /api/kittens/
router.get('/', async(req, res, next) => {
  try {
    const kittens = await Kitten.findAll();
    res.json(kittens);
  } catch (error) {
    next(error)
  }
});
// matches POST requests to /api/kittens/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/kittens/:kittenId
router.put('/:kittenId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/kittens/:kittenId
router.delete('/:kittenId', function (req, res, next) { /* etc */});

module.exports = router;
