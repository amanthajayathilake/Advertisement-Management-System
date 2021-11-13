const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", (req, res) => {
  res.send("hello World");
});

router.post("/", (req, res) => {
  const post = req.body;
  Posts.create(post);
  res.json(post);
});

module.exports = router;
