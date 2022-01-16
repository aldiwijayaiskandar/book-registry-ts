import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  author_id!: number;

  @Column()
  name!: string;

  @Column("date")
  release_date!: string;
}
