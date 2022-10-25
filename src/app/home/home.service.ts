import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produtos[]>(this.API);
  }
}
