import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from './Vehicle';
import { Driver } from "./Driver";
import { TripPurpose } from "./TripPurpose";

Entity()
export class Trip {

    @PrimaryGeneratedColumn({ name: "tripid" })
    id: number

    @ManyToOne(() => Driver)
    driver: Driver

    @ManyToOne(() => Vehicle)
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

    constructor(driver: Driver, vehicle: Vehicle, date: Date, purpose: TripPurpose, startLocation: string, endLocation: string, distance: number) {
        this.driver = driver
        this.vehicle = vehicle
        this.date = date
        this.purpose = purpose
        this.startLocation = startLocation
        this.endLocation = endLocation
        this.distance = distance
        this.newOdometer = vehicle.odometer
    }

}