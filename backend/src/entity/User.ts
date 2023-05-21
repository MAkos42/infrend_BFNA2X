import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class User {
    @PrimaryGeneratedColumn({ name: "userid" })
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;


}