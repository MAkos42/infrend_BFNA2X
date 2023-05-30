import { TripPurpose } from "./TripPurpose";

export class TripDTO {

    id: number

    driver: string

    vehicle: string

    date: Date

    purpose: TripPurpose

    startLocation: string

    endLocation: string

    distance: number

    newOdometer: number

    constructor(driver: string, vehicle: string, date: Date, purpose: TripPurpose, startLocation: string, endLocation: string, distance: number) {
        this.driver = driver
        this.vehicle = vehicle
        this.date = date
        this.purpose = purpose
        this.startLocation = startLocation
        this.endLocation = endLocation
        this.distance = distance
        this.newOdometer = 0
    }

}