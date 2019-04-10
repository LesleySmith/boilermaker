const router = require('express').Router();
const User = require('../db/user')

// matches GET requests to /api/users/
router.get('/', async(req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error)
  }
});
// matches POST requests to /api/users/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/users/:userId
router.put('/:userId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/users/:userId
router.delete('/:userId', function (req, res, next) { /* etc */});

module.exports = router;
