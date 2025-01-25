import { Producto } from './../../interfaces/producto.interface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export default class DetalleComponent {
  producto : Producto ={
    name: "Pincel",
    description: "Tamaño numero 8, punta plana" ,
    precio: 100,
    imagen: "https://www.pincel.net"
  }

}
