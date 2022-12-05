import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Cartao, Cliente, Produtos } from '../core/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:8080/produtos/todos';
  clPost = 'http://localhost:8080/clientes'
  ccPost = 'http://localhost:8080/cartoes'

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('http://localhost:8080/produtos/todos').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  listarProdutosId(genero_id: number): Observable<Produtos> {
    return this.http
      .get<Produtos>(`$(this.url)/$(genero_id)`)
      .pipe((retorno) => retorno);
  }

  postCliente(cliente?: Cliente): Observable<Object> {
    return this.http.post<Object>(`${this.clPost}`, cliente)
  }

  postCartao(cartao?: Cartao): Observable<Object> {
    return this.http.post<Object>(`${this.ccPost}`, cartao)
  }
}
