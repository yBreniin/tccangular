import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../core/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  list(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${this.API}/todos`).pipe(retorno => retorno);
  }

  listarProdutoId(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.API}/${id}`).pipe(retorno => retorno);
  }
}
