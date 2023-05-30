import express = require("express");
import cors = require("cors");
import { AppDataSource } from "./data-source"
import { Driver } from "./entity/Driver";
import { Fuel } from "./entity/Fuel";
import { PrivilegeLevel } from "./entity/PrivilegeLevel";
import { Trip } from "./entity/Trip";
import { TripPurpose } from "./entity/TripPurpose";
import { Login } from "./entity/Login";
import { Vehicle } from "./entity/Vehicle";
import { VehiclesService } from "./service/vehiclesService";


const app = express();

app.use(express.json());

let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

app.get('/api/vehicles', async (req, res) => {
    try {
        const vService = new VehiclesService();
        const tableData = await vService.getVehicles();
        console.log('Returned entries:' + tableData.length);
        res.json(tableData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/getvehicle', async (req, res) => {
    try {
        const vService = new VehiclesService();
        const vehicle = await vService.getVehicleByRegPlate();
        console.log('Returned vehicle:' + vehicle);
        res.json(vehicle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/savevehicle', async (req, res) => {
    try {
        const vService = new VehiclesService();
        const { regPlate, type, fuel, fuelEcon, odometer } = req.body;
        const newVehicle: Vehicle = new Vehicle(regPlate, type, fuel, fuelEcon, odometer)
        console.log(newVehicle);
        await vService.saveVehicle(newVehicle);

        res.json(newVehicle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is listening at port 3000 ...');
});

AppDataSource.initialize().then(async () => {
    let newAdmin: Login = new Login("admin", "admin", PrivilegeLevel.ADMIN);
    newAdmin.id = 1;
    let newDriver: Driver = new Driver("Mészáros Ákos", new Date(2000, 9, 25), "valaholaföldön", "AB123456", new Date(2024, 1, 1));
    newDriver.id = 1;
    let newVehicle: Vehicle = new Vehicle("ABCD-111", "Honda Civic", Fuel.DIESEL, 6.2, 10000);
    newVehicle.id = 1;
    let newTrip: Trip = new Trip(newDriver, newVehicle, new Date(), TripPurpose.BUSINESS, "Miskolc", "Budapest", 182)
    newTrip.id = 1;


    await AppDataSource.manager.save(newAdmin);
    await AppDataSource.manager.save(newDriver);
    await AppDataSource.manager.save(newVehicle);
    await AppDataSource.manager.save(newTrip);


    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => {
    console.log(error);
    //AppDataSource.destroy()
})
