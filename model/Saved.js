const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const savedSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  url: {
    type: String,
    required: true,
  },
});

/**
 * Save News
 * @param title
 * @param url
 */
savedSchema.statics.saveNews = function (title, url) {
  if (typeof title === "string" && typeof url === "string") {
    return Saved.create({
      title: title,
      url: url,
    }).catch((err) => {
      throw new Error("Failed to save news");
    });
  } else {
    throw new Error("Types are incorrect");
  }
};

/**
 * get news
 */
savedSchema.statics.getNews = function () {
  return Saved.find().catch((err) => {
    throw new Error("Failed to get news");
  });
};

Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
