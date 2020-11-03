var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var displayGet = {
        burger: data
      };
      console.log(displayGet);
      res.render("index", displayGet);
    });
  });
  



module.exports = router;