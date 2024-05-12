const express = require("express");
const { chatComplete, getToken } = require("../controllers/chatController");

const ChatRoute = express.Router();

ChatRoute.post("/chat", chatComplete);

ChatRoute.get("/token", getToken);

module.exports = ChatRoute;
