import express from "express";
import { getConnection, getManager } from "typeorm";

import { Book } from "../model";

export const bookController = {
  getAllBook: async (req: express.Request, res: express.Response) => {
    const books = await getManager().query(`
      select book.id, author.name as author_name, book.name as book_name, release_date 
        from book, author
	    where book.author_id = author.id;
    `);

    res.status(200).json(books);
  },
  addBook: async (req: express.Request, res: express.Response) => {
    const book = await getConnection().getRepository(Book).save(req.body);

    res.status(200).json(book);
  },
};
