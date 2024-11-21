import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CetegoriasService {

  constructor(private client: HttpClient) {  
  }

  getCategorias() : Observable<any>
  {
    return this.client.get("http://localhost:3000/categorias");
  }

  getCategoria(id : number) : Observable<any>
  {
    return this.client.get(`http://localhost:3000/categorias?id=${id}`);
  }


  getHamburguersPorCategoria(id: number) : Observable<any>
  {
    return this.client.get(`http://localhost:3000/hamburgers?categoriaId=${id}`);
  }


}
