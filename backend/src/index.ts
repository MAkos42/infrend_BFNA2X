// import express = require("express");
import { AppDataSource } from "./data-source"
import { Driver } from "./entity/Driver";
import { Fuel } from "./entity/Fuel";
import { PrivilegeLevel } from "./entity/PrivilegeLevel";
import { Trip } from "./entity/Trip";
import { TripPurpose } from "./entity/TripPurpose";
import { User } from "./entity/User";
import { Vehicle } from "./entity/Vehicle";


/* const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'How did you reach my backend?' });
});

app.listen(3000, () => {
    console.log('Server is listening at port 3000 ...');
}); */

AppDataSource.initialize().then(async () => {

    let newAdmin: User = new User("admin", "admin", PrivilegeLevel.ADMIN);
    let newDriver: Driver = new Driver("Mészáros Ákos", new Date(2000, 9, 25), "valaholaföldön", "AB123456", new Date(2024, 1, 1));
    let newVehicle: Vehicle = new Vehicle("ABCD-111", "Honda Civic", Fuel.DIESEL, 6.2, 10000);
    let newTrip: Trip = new Trip(newDriver, newVehicle, new Date(), TripPurpose.BUSINESS, "Miskolc", "Budapest", 182)

    await AppDataSource.manager.save(newDriver);
    await AppDataSource.manager.save(newAdmin);
    await AppDataSource.manager.save(newVehicle);
    await AppDataSource.manager.save(newTrip);


    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => {
    console.log(error);
    //AppDataSource.destroy()
})
