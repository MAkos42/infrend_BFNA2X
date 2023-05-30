import { AppDataSource } from "../data-source";
import { Vehicle } from "../entity/Vehicle";

export class VehiclesService {
    getVehicles(): Promise<Vehicle[]> {
        return AppDataSource.manager.find(Vehicle)
    }
}