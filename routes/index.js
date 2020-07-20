const express = require("express");
const router = express.Router();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
const Saved = require("../model/Saved");

/**
 * get all news
 */
router.get("/", function (req, res) {
  newsapi.v2
    .topHeadlines({
      category: "business",
      language: "en",
      country: "us",
    })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

/**
 * save news
 */
router.post("/save", function (req, res) {
  Saved.saveNews(req.body.title, req.body.url)
    .then((res) => {
      res.send("Done");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
