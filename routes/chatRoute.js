import express from "express";
import { chatComplete, getToken } from "../controller/chatController";

const ChatRoute = express.Router();

ChatRoute.post("/chat", chatComplete);

ChatRoute.get("/token", getToken);

export default ChatRoute;
