const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => res.send("Get All Tasks"))
    .post((req, res) => res.send("Create Tasks"));
router
    .route("/:id")
    .get((req, res) => res.send("Get Single Tasks"))
    .patch((req, res) => res.send("Update Tasks"))
    .delete((req, res) => res.send("Delete Tasks"));

module.exports = router;
