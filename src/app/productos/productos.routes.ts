import { Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ProductosComponent } from './productos.component';

export const routes: Routes = [
    {path: '', component: ProductosComponent, children:[
         {path: 'listar', component: ListarComponent},
         {path: 'detalle', component: DetalleComponent}
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
