import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';



@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export default class ListarComponent {
  productos: Producto[] = [
    { id: '11', name: 'Martillo', description: 'Martillo mango de madera', precio: 150 },
    { id: '12', name: 'Destornillador', description: 'Destornillador de estrella', precio: 50 },
    { id: '13', name: 'Sierra', description: 'Sierra para madera', precio: 200 }
  ];
}
