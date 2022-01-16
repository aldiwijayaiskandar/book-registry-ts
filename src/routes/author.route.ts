import express from "express";
import { authorController } from "../controller";

const authorRouter = express.Router();

authorRouter.get("/", authorController.getAllAuthor);
authorRouter.post("/", authorController.addAuthor);

export { authorRouter };
