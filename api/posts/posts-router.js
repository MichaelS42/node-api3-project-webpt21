const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  userDb.get()
    .then(users => res.json(users))
    .catch(() => next({ code: 500, message: "There was an error retrieving users." }));
});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

// do not forget to export the router
module.exports = router;