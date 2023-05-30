import { Component, OnInit, } from '@angular/core';
import { VehiclesProxyService } from '../services/vehicles-proxy.service';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleDTO } from '../DTO/VehicleDTO';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicleSource: MatTableDataSource<VehicleDTO>;
  displayedColumns: string[] = ['regPlate', 'type', 'fuel', 'fuelEcon', 'odometer'];

  constructor(private vehiclesProxyService: VehiclesProxyService) { }

  ngOnInit() {
    console.log("Vehicles init");
    this.loadData();
  }

  loadData() {
    this.vehiclesProxyService.getAllVehicles().subscribe(data => {
      this.vehicleSource = new MatTableDataSource(data);
    });
  }
}
