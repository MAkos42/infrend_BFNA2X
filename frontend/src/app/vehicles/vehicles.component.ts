import { Component, OnInit, } from '@angular/core';
import { VehiclesProxyService } from '../services/vehicles-proxy.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleDTO } from '../DTO/VehicleDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fuel } from '../DTO/Fuel';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicleSource: MatTableDataSource<VehicleDTO>;
  displayedColumns: string[] = ['regPlate', 'type', 'fuel', 'fuelEcon', 'odometer'];

  vehicleForm = new FormGroup({
    regPlate: new FormControl(null, [Validators.required, Validators.pattern('^[A-z]{3,4}-[\\d]{3}$')]),
    type: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    fuel: new FormControl<Fuel>(null, Validators.required),
    fuelEcon: new FormControl<number>(null, [Validators.required, Validators.min(0)]),
    odometer: new FormControl<number>(null, [Validators.required, Validators.min(0)])
  });

  constructor(private vehiclesProxyService: VehiclesProxyService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.vehiclesProxyService.getAllVehicles().subscribe(data => {
      console.log(data);
      this.vehicleSource = new MatTableDataSource(data);
    });
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      let formVehicle = this.vehicleForm.value;
      let newVehicle: VehicleDTO = new VehicleDTO(formVehicle.regPlate.toUpperCase(), formVehicle.type, formVehicle.fuel, formVehicle.fuelEcon, formVehicle.odometer);
      console.log(newVehicle);
      this.vehiclesProxyService.saveVehicle(newVehicle).subscribe(data => { console.log(data) });
      this.snackBar.open('Jármű sikeresen elmentve', 'Bezár', { duration: 2000 });
      this.vehicleForm.reset();
      this.loadData();
    } else {
      this.snackBar.open('Kérlek tölts ki minden mezőt megfelelően', 'Bezár', { duration: 2000 });
    }
  }
}
