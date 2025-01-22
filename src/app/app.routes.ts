import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';



export const routes: Routes = [
    {path: 'productos', component: ProductosComponent, children:[
         {path: 'listar', loadComponent:() => import('./productos/pages/listar/listar.component').then(m =>m.ListarComponent) 

         },
         {path: 'detalle', loadComponent:() => import('./productos/pages/detalle/detalle.component').then(m =>m.DetalleComponent)} 
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
