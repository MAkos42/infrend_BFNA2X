import { AppDataSource } from "../data-source";
import { Vehicle } from "../entity/Vehicle";

export class VehiclesService {
    getVehicleByRegPlate() {
        throw new Error("Method not implemented.");
    }
    getVehicles(): Promise<Vehicle[]> {
        return AppDataSource.manager.find(Vehicle)
    }

    saveVehicle(vehicle: Vehicle): Promise<Vehicle> {
        return AppDataSource.manager.save(Vehicle, vehicle);
    }
}