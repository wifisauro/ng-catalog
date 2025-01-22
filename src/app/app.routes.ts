import { Routes } from '@angular/router';
import { DetalleComponent } from './productos/pages/detalle/detalle.component';
import { ListarComponent } from './productos/pages/listar/listar.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    {path: 'detalle', component: DetalleComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '', redirectTo: '/productos', pathMatch: 'full'}
];
