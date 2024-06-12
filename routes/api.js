const router = require("express").Router();
const { getInfo, addInfo } = require("../controllers/nino");
const { getLoli } = require("../controllers/loli");
const { getWallpaper } = require("../controllers/wallpaper");
const { home } = require("../controllers/home");

router.get("/nino/get/:input", getInfo);
router.get("/nino/add/:input", addInfo);
router.get("/loli", getLoli);
router.get("/wallpaper", getWallpaper);
router.get("/", home);

module.exports = router;