import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export default class ProductosComponent {
  mostrarBotones: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Si la ruta es exactamente "/productos", muestra los botones
        this.mostrarBotones = event.url === '/productos';
      }
    });
  }

  irAListar() {
    this.mostrarBotones = false;
    this.router.navigate(['/productos/listar']);
  }

  irADetalles() {
    this.mostrarBotones = false;
    this.router.navigate(['/productos/detalle']);
  }
}
