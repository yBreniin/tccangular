import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  //link da api ""
  getProduct(){
    return this.http.get("").pipe(map((res:any)=>{
      return res;
    }))
  }
}
