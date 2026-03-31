import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { Driver } from '../../models/driver.model';
import { Vehicle } from '../../models/vehicle.model';
import { DriverService } from '../../services/driver.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule, InputTextModule, MultiSelectModule, ButtonModule],
  templateUrl: './driver-form.html',
  styleUrl: './driver-form.scss'
})
export class DriverForm implements OnInit {
  driver = signal<Partial<Driver>>({ vehicle_ids: [] });
  isEdit = signal(false);
  availableVehicles = signal<{ label: string; value: number }[]>([]);

  constructor(
    private driverService: DriverService,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(vehicles => {
      this.availableVehicles.set(
        vehicles.map(v => ({ label: `${v.brand_id} (${v.license_plate})`, value: v.id }))
      );
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit.set(true);
      this.driverService.getById(+id).subscribe(d => this.driver.set(d));
    }
  }

  save(): void {
    const d = this.driver();
    if (this.isEdit() && d.id) {
      this.driverService.update(d.id, d).subscribe(() => this.router.navigate(['/drivers']));
    } else {
      this.driverService.create(d).subscribe(() => this.router.navigate(['/drivers']));
    }
  }
}
