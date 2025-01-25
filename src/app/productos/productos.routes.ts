import { Routes } from '@angular/router';


export const productoRoutes: Routes = [
  {
    path: 'detalle',
    title: 'detalle producto',
    loadComponent: () =>
      import('./pages/detalle/detalle.component')
  },{
    path: 'listar',
    title: 'listar productos',
    loadComponent: () =>
      import('./pages/listar/listar.component')
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
