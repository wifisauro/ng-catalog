import { Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ListarComponent } from './pages/listar/listar.component';


export const productoRoutes: Routes = [

    { path: '**', redirectTo: '', pathMatch: 'full'}
];
