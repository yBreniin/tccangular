import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyAaaaRecord } from 'dns';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoapiService {
  carrinhoDataList:any =[];
  productList= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  //obter dados do produto
  getProductData(){
    return this.productList.asObservable();
  }


  //definir dados do produto
  setProduct(product:any){
    this.carrinhoDataList.push(...product);
    this.productList.next(product)
  }


  //adicionar aos detalhes do carrinho
  addToCarrinho(product:any){
    this.carrinhoDataList.push(product);
    this.productList.next(this.carrinhoDataList);
    this.getTotal();
  }


  //obter o valor total
  getTotal() {
    let grandTotal = 0;
    this.carrinhoDataList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  //Remove os dados do carrinho um por um
  removeCarrinhoData(product:any){
    this.carrinhoDataList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.carrinhoDataList.splice(index,1)
      }
    })
  }

  //Remove todo os dados do carrinho
  removeAllCarrinho(product:any){
   this.carrinhoDataList =[]
   this.productList.next(this.carrinhoDataList)
  }
}
