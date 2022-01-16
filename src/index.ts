import express from "express";
import "reflect-metadata";

import { connection } from "./config";
import { authorRouter, bookRouter } from "./routes";

const app: express.Application = express();

// middleware
app.use(express.urlencoded());
app.use(express.json());

// routes
app.use("/author", authorRouter);
app.use("/book", bookRouter);

// server
app.listen(3000, async () => {
  try {
    await connection();
    console.log("App is Running in PORT 3000");
  } catch (err) {
    console.log("App Error: ", err);
  }
});
