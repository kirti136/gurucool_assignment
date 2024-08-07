const URL = require("../models/url.model");
const shortid = require("shortid");

const BASE_URL = "http://localhost:3000/api/url";

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = shortid.generate();
  const shortUrl = `${BASE_URL}/${shortId}`;

  try {
    const url = new URL({
      originalUrl,
      shortUrl,
      userId: req.user.id,
    });
    await url.save();
    res.status(200).json({
      success: true,
      message: "URL shortened successfully",
      originalUrl,
      shortUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await URL.findOne({ shortUrl: `${BASE_URL}/${shortUrl}` });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ message: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
