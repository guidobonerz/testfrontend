import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule, InputTextModule, SelectModule, ButtonModule],
  templateUrl: './vehicle-form.html',
  styleUrl: './vehicle-form.scss'
})
export class VehicleForm implements OnInit {
  vehicle = signal<Partial<Vehicle>>({});
  isEdit = signal(false);

  fuelTypes = [
    { label: 'Gasoline', value: 'gasoline' },
    { label: 'Diesel', value: 'diesel' },
    { label: 'Electric', value: 'electric' },
    { label: 'Hybrid', value: 'hybrid' },
    { label: 'LPG', value: 'lpg' }
  ];

  vehicleTypes = [
    { label: 'Car', value: 'car' },
    { label: 'Truck', value: 'truck' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Van', value: 'van' },
    { label: 'Bus', value: 'bus' }
  ];

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit.set(true);
      this.vehicleService.getById(+id).subscribe(v => this.vehicle.set(v));
    }
  }

  save(): void {
    const v = this.vehicle();
    if (this.isEdit() && v.id) {
      this.vehicleService.update(v.id, v).subscribe(() => this.router.navigate(['/vehicles']));
    } else {
      this.vehicleService.create(v).subscribe(() => this.router.navigate(['/vehicles']));
    }
  }
}
