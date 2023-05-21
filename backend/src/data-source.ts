import "reflect-metadata"
import { DataSource } from "typeorm"
import { Vehicle } from "./entity/Vehicle"
import { Driver } from "./entity/Driver"
import { Trip } from "./entity/Trip"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admin",
    password: "admin",
    database: "triplog",
    synchronize: true,
    logging: false,
    entities: [Vehicle, Driver, Trip, User],
    migrations: [],
    subscribers: [],
})
