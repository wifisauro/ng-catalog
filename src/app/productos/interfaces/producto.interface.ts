export interface Producto {
  name : string;
  description : string;
  precio: number;
  imagen?:string;
}

export const PRODUCTO: Producto = {
  name : '',
  description : '',
  precio: 0,
  imagen:'',
}
