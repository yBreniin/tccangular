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

  getProduct() {
    return this.http.get<any>('http://localhost:8080/produtos/todos').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
