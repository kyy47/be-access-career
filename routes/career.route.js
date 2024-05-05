const { Router } = require("express");
const { getAllCareer } = require("../controllers/career.controller");
const router = Router();

router.route("/").get(getAllCareer);

module.exports = router;
