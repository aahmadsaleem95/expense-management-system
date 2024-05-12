const express = require("express");
const { chatComplete, getToken } = require("../controller/chatController");

const ChatRoute = express.Router();

ChatRoute.post("/chat", chatComplete);

ChatRoute.get("/token", getToken);

export default ChatRoute;
