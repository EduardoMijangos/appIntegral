import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getNewCategory: EventEmitter<any> = new EventEmitter();

  private categoriaUrl = 'http://localhost:8000/api';


  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Request> {
    return this.http.get<Request>(`${this.categoriaUrl}/categorias`);
  }


  postCategorias(categoria: any) {
    const url = `${this.categoriaUrl}/nuevaCategoria`;
    return this.http.post(url, categoria)
  }

  // * Emiters

  setNewCategory(category: any){
    this.getNewCategory.emit(category);
  }


  
}
