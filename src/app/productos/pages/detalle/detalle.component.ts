import { PRODUCTO, Producto } from './../../interfaces/producto.interface';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export default class DetalleComponent implements OnInit {

  protected product: WritableSignal<Producto> = signal(PRODUCTO)

  producto : Producto ={
    id: "1",
    name: "Pincel",
    description: "Tamaño numero 8, punta plana" ,
    precio: 100,
    imagen: "https://www.pincel.net"
  }

  ngOnInit(): void {
    this.product.set(this.producto)
  }

}
