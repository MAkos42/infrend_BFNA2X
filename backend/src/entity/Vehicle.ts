import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn({ name: "vehicleid" })
    id: number

    @Column("char", { length: 8 })
    regPlate: string

    @Column()
    type: string

    @Column()
    fuel: Fuel

    @Column("double")
    fuelEcon: number

    @Column()
    odometer: number

}
