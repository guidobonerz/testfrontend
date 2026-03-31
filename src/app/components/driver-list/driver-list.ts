import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Driver } from '../../models/driver.model';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, TableModule, ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './driver-list.html',
  styleUrl: './driver-list.scss'
})
export class DriverList implements OnInit {
  drivers = signal<Driver[]>([]);

  constructor(
    private driverService: DriverService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.driverService.getAll().subscribe(data => this.drivers.set(data));
  }

  confirmDelete(driver: Driver): void {
    this.confirmationService.confirm({
      message: `Delete driver "${driver.first_name} ${driver.last_name}"?`,
      accept: () => {
        this.driverService.delete(driver.id).subscribe(() => this.loadDrivers());
      }
    });
  }
}
