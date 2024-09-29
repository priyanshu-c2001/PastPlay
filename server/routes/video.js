const express = require("express");
const {homePage, moviePage, renderEpisodes, streaming } = require("../controller/videoController");

const router = express.Router();

router.get('/', homePage);

router.get('/movies.html', moviePage);

router.get('/watch', renderEpisodes);

router.get("/video/:filename", streaming);

module.exports = router;
