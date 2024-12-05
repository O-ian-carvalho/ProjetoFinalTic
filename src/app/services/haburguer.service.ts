import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaburguerService {

   constructor(private client: HttpClient) {  
  }

  getHamburguer(id: string | null) : Observable<any>
  {
    return this.client.get(`https://localhost:7255/api/Products?id=${id}`);
  }
}
