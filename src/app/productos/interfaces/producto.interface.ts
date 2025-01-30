export interface Producto {
  id: string;
  name : string;
  description : string;
  precio: number;
  imagen?:string;
}

export const PRODUCTO: Producto = {
  id: '',
  name : '',
  description : '',
  precio: 0,
  imagen:'',
}
