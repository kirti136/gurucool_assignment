const shortid = require("shortid");
const URL = require("../models/url.model");

const BASE_URL = "http://localhost:3000/api/url";

// Function to generate a unique short URL
const generateUniqueShortUrl = async () => {
  let unique = false;
  let shortUrl;
  while (!unique) {
    const shortId = shortid.generate();
    shortUrl = `${BASE_URL}/${shortId}`;
    const existingUrl = await URL.findOne({ shortUrl });
    if (!existingUrl) {
      unique = true;
    }
  }
  return shortUrl;
};

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  try {
    // Check if the original URL already exists in the database
    let url = await URL.findOne({ originalUrl, userId: req.user.id });

    if (url) {
      // If the URL already exists, return the existing short URL
      return res.status(200).json({
        success: true,
        message: "URL already shortened",
        originalUrl,
        shortUrl: url.shortUrl,
      });
    }

    // If the URL does not exist, create a new unique short URL
    const shortUrl = await generateUniqueShortUrl();

    url = new URL({
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
