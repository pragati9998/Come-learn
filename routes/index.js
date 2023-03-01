//for route model using the express model
const express = require("express");
//for route model using router express
const router = require("router");

//for home page router
router.get("/", (req, res) => {
  res.status(404);
});

//About the page router
router.get("/about", (req, res) => {
  res.send("about the Application page");
});

module.exports = router;
