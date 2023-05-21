import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from './Vehicle';
import { Driver } from "./Driver";

Entity()
export class Trip {

    @PrimaryGeneratedColumn({ name: "tripid" })
    id: number

    @ManyToOne(() => Driver, (driver) => driver.id)
    driver: Driver

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
    vehicle: Vehicle

    @Column("date")
    date: Date

    @Column()
    purpose: TripPurpose

    @Column()
    startLocation: string

    @Column()
    endLocation: string

    @Column()
    distance: number

    @Column()
    newOdometer: number

}