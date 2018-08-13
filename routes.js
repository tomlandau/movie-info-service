const router = require('express').Router();
const getMovies = require('./movie-repo');


router.get('/movies', function(req, res, next) {
      return res.json(getMovies());
  });

module.exports = router;