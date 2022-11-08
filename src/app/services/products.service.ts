/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productos: Producto[];
  private productosEnCarro: Producto[];
  constructor() {
    this.productosEnCarro = [];
    this.productos=[
      {
        id:"1",
        img:"https://picsum.photos/id/684/600/400",
        name:"Galletas",
        price:15,
        amount:0,
      },
      {
        id:"2",
        img:"https://picsum.photos/id/685/600/400",
        name:"Refresco",
        price:22,
        amount:0,
      },
      {
        id:"3",
        img:"https://picsum.photos/id/686/600/400",
        name:"Papas",
        price:15,
        amount:0,
      }
    ]
   }
   public getProducts(): Producto[]{
    return this.productos;
   }

    public getProductById(id: String): Producto {
      let item: Producto;
      item = this.productos.find( producto =>{
        return producto.id===id;
      })
      item.amount = item.amount + 1;
      return item;
    }


    public addProduct(newProduct: Producto){
      this.productos.push(newProduct);
    }

    public removeProductFromCart(ind: number){
     this.productosEnCarro.splice(ind,1);
    }

    public llenaCarro(): Producto[] {
      return this.productosEnCarro;
    }
    public addProductById(i: number) {
      let index=-1;
      index=this.already(this.productos[i].id)
      if(index===-1){
      this.productosEnCarro.push(this.productos[i]);
      this.productosEnCarro[this.productosEnCarro.length-1].amount+=1;
      }
      else{
          this.productosEnCarro[index].amount+=1;
      }
    }
    public already(id: String): number {
      for (let i = 0; i < this.productosEnCarro.length; i++) {
        if(this.productosEnCarro[i].id===id)
          return i
      }
      return -1
    }
}
