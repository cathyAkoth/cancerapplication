const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('cervicalCancer');
  });


  module.exports = router;