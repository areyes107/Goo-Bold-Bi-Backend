const Express = require("express");
const router = Express.Router();

const { rootResolver, embedDetailResolver } = require("../resolvers");

router.get("/", rootResolver);
router.post("/embedDetail", embedDetailResolver);

module.exports = router;