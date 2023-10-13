import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  newProduct(data: any){
    return this.http.post(`${URL}nuevoProducto`, data)
  }
}
