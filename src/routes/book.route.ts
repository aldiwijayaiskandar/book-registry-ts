import express from "express";
import { bookController } from "../controller";

const bookRouter = express.Router();

bookRouter.get("/", bookController.getAllBook);
bookRouter.post("/", bookController.addBook);

export { bookRouter };
