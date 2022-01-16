import { createConnection } from "typeorm";
import { Author, Book } from "../model";

export const connection = () => {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "book_registry",
    entities: [Author, Book],
    synchronize: true,
  });
};
