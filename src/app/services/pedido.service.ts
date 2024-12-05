import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private orderId = "08dd14b9-4f27-481b-8772-9bcb5362b24f"
  private apiUrl = 'http://localhost:3000/pedidos'; // URL do endpoint para pedidos

  constructor(private http: HttpClient) {}

  getHamburguerByName(name: string | null) : Observable<any>
  {
    return this.http.get(`https://localhost:7255/api/Products/name/${name}`);
  } 

  createPedido( productId : string): Observable<any> {
    return this.http.get(`https://localhost:7255/api/Orders/${this.orderId}/product/${productId}`);
  }
}
