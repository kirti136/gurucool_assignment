const express = require("express");
const router = express.Router();
const { shortenUrl, redirectUrl } = require("../controllers/url.controller");
const { validate } = require("../middlewares/validation.middleware");
const { verifyToken } = require("../middlewares/authentication.middleware");

router.post("/shorten", verifyToken, shortenUrl);
router.get("/:shortUrl", redirectUrl);

module.exports = router;
