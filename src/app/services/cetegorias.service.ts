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
    return this.client.get("https://localhost:7255/api/Categories");
  }

  getCategoria(id : string) : Observable<any>
  {
    return this.client.get(`https://localhost:7255/api/Categories/?Id=${id}`);
  }


  getHamburguersPorCategoria(id: string) : Observable<any>
  {
    return this.client.get(`https://localhost:7255/api/Categories/${id}/products`);
  }


}
