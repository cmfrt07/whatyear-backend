var express = require('express');
const { route } = require('.');
var router = express.Router();

router.get("/", (req, res) => {
  const newYear = new Date().getFullYear()
  res.json({year: newYear });
});


module.exports = router;