import { Routes } from '@angular/router';
import { DetalleComponent } from './productos/pages/detalle/detalle.component';
import { ListarComponent } from './productos/pages/listar/listar.component';
import { ProductosComponent } from './productos/productos.component';



export const routes: Routes = [
    {path: '', component: ProductosComponent},
    {path: 'productos', component: ProductosComponent, children:[
         {path: 'listar', component: ListarComponent},
         {path: 'detalle', component: DetalleComponent}
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
