const express = require("express");
const router = express.Router();
const {
  getNews,
  saveNews,
  getSavedNews,
} = require("../controller/news.controller");

/**
 * get all news
 */
router.get("/", getNews);

/**
 * save news
 */
router.post("/save", saveNews);

/**
 * return saved news
 */
router.get("/get_saved_news", getSavedNews);

module.exports = router;
