const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
const Saved = require("../model/Saved");

/**
 * controller for getting news
 */
const getNews = function (req, res) {
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
};

/**
 * controller for saving news
 */
const saveNews = function (req, res) {
  Saved.saveNews(req.body.title, req.body.url)
    .then(() => {
      res.send("Done");
    })
    .catch((err) => {
      res.send(err);
    });
};

/**
 * controller for getting saved news
 */
const getSavedNews = function (req, res) {
  Saved.getNews()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

module.exports = {
  getNews: getNews,
  saveNews: saveNews,
  getSavedNews: getSavedNews,
};
