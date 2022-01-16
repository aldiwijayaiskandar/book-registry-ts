import express from "express";
import { getConnection } from "typeorm";

import { Author } from "../model";

export const authorController = {
  getAllAuthor: async (req: express.Request, res: express.Response) => {
    const authors = await getConnection().getRepository(Author).find();

    res.status(200).json(authors);
  },
  addAuthor: async (req: express.Request, res: express.Response) => {
    const author = await getConnection().getRepository(Author).save(req.body);

    res.status(201).json(author);
  },
};
