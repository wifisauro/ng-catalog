import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export default class ProductosComponent {
      constructor(private router : Router) {}

      irAListar(){
        this.router.navigate(['productos/listar']);
      }

      irADetalles(){
        this.router.navigate(['productos/detalle']);
      }
}
