import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Produtos } from '../core/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private readonly API = 'http://localhost:8080/produtos/todos';

  //link da api ""
  // getProduct(){
  //   return this.http.get("https://localhost:8080/produtos/todos").pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  listarProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.API);
  }

  listarProdutosId(id: number): Observable<Produtos> {
    return this.http
      .get<Produtos>(`$(this.url)/$(id)`)
      .pipe((retorno) => retorno);
  }
}
