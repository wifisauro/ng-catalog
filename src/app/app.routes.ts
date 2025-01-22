import { Routes } from '@angular/router';
import { productoRoutes } from './productos/productos.routes';



export const routes: Routes = [

    {path: 'productos',
      loadComponent: () => import('./productos/productos.component'),children: productoRoutes,},
    { path: '**', redirectTo: 'productos', pathMatch: 'full'}
];
