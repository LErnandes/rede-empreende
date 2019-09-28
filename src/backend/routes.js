const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/user");
const SessionController = require("./controllers/session");

const authMiddleware = require("./middleware/auth");


routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

routes.use(authMiddleware);

module.exports = routes;