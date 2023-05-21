import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PrivilegeLevel } from './PrivilegeLevel';

Entity()
export class User {
    @PrimaryGeneratedColumn({ name: "userid" })
    id: number

    @Column()
    username: string

    @Column()
    passwd: string

    @Column()
    privilegeLevel: PrivilegeLevel

    constructor(username: string, password: string, privilegeLevel: PrivilegeLevel) {
        this.username = username;
        this.passwd = password;
        this.privilegeLevel = privilegeLevel;
    }
}