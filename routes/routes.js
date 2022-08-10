var router = require("express").Router();
const apiRoutes = require("../routes/api/user-routes")


router.use("/api", apiRoutes)

router.use("/api/users", apiRoutes)



module.exports = router;
