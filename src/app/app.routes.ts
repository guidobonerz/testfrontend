import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      {
        path: 'vehicles',
        loadComponent: () => import('./components/vehicle-list/vehicle-list').then(m => m.VehicleList)
      },
      {
        path: 'vehicles/new',
        loadComponent: () => import('./components/vehicle-form/vehicle-form').then(m => m.VehicleForm)
      },
      {
        path: 'vehicles/:id/edit',
        loadComponent: () => import('./components/vehicle-form/vehicle-form').then(m => m.VehicleForm)
      },
      {
        path: 'drivers',
        loadComponent: () => import('./components/driver-list/driver-list').then(m => m.DriverList)
      },
      {
        path: 'drivers/new',
        loadComponent: () => import('./components/driver-form/driver-form').then(m => m.DriverForm)
      },
      {
        path: 'drivers/:id/edit',
        loadComponent: () => import('./components/driver-form/driver-form').then(m => m.DriverForm)
      }
    ]
  }
];
