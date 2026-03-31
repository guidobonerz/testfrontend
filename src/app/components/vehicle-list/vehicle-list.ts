import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, TableModule, ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.scss'
})
export class VehicleList implements OnInit {
  vehicles = signal<Vehicle[]>([]);

  constructor(
    private vehicleService: VehicleService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getAll().subscribe(data => this.vehicles.set(data));
  }

  confirmDelete(vehicle: Vehicle): void {
    this.confirmationService.confirm({
      message: `Delete vehicle "${vehicle.name}"?`,
      accept: () => {
        this.vehicleService.delete(vehicle.id).subscribe(() => this.loadVehicles());
      }
    });
  }
}
