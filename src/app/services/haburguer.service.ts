import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaburguerService {

   constructor(private client: HttpClient) {  
  }

  getHamburguer(id: number) : Observable<any>
  {
    return this.client.get(`http://localhost:3000/hamburgers/?id=${id}`);
  }
}
