import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver {

    @PrimaryGeneratedColumn({ name: "driverid" })
    id: number

    @Column()
    nev: string

    @Column("date")
    dateOfBirth: Date

    @Column()
    address: string

    @Column({ unique: true })
    driverId: number

    @Column("date")
    idExpirationDate: Date
}