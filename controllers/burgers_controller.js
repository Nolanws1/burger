var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var displayGet = {
        burgers: data
    };
      console.log(displayGet);
      res.render("index", displayGet);
    });
  });

router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
    res.json({ id: result.insertId });
  });
});

  



module.exports = router;