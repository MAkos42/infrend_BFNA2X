import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm"
import { Fuel } from "./Fuel"

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn({ name: "vehicleid" })
    id: number

    @Column("char", { length: 8, unique: true })
    regPlate: string

    @Column()
    type: string

    @Column()
    fuel: Fuel

    @Column("double")
    fuelEcon: number

    @Column()
    odometer: number

    constructor(
        regPlate: string, type: string, fuel: Fuel, fuelEcon: number, odometer: number) {
        this.regPlate = regPlate
        this.type = type
        this.fuel = fuel
        this.fuelEcon = fuelEcon
        this.odometer = odometer
    }

}
