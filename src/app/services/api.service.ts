import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Cartao, Cliente, Produtos } from '../core/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  pdTodos = 'http://localhost:8080/produtos/todos'
  clPost = 'http://localhost:8080/clientes'
  ccPost = 'http://localhost:8080/cartoes'
  clGet = 'http://localhost:8080/clientes/todos'
  getGeneroMas = 'http://localhost:8080/produtos/genero?id_genero=1'
  getGeneroFem = 'http://localhost:8080/produtos/genero?id_genero=2'
  getGeneroNen = 'http://localhost:8080/produtos/genero?id_genero=3'

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>(this.getGeneroNen)
    .pipe(map((res: any) => {
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

  getPorGeneroMas() {
    return this.http
    .get<Produtos>(this.getGeneroMas)
    .pipe(map((res: any) => {
        return res;
      })
    );
  }

  getPorGeneroFem() {
    return this.http
    .get<Produtos>(this.getGeneroFem)
    .pipe(map((res: any) => {
        return res;
      })
    );
  }

  getClientes() {
    return this.http
    .get<Cliente>(this.clGet)
    .pipe(map((res: any) => {
        return res;
      })
    );
  }
}
