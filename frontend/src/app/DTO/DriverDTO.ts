export class DriverDTO {

    id: number

    nev: string

    dateOfBirth: Date

    address: string

    driversLicense: string

    idExpirationDate: Date

    constructor(nev: string, dateOfBirth: Date, address: string, driversLicense: string, idExpirationDate: Date) {
        this.nev = nev;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.driversLicense = driversLicense;
        this.idExpirationDate = idExpirationDate;
    }
}