import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:3000/pedidos'; // URL do endpoint para pedidos

  constructor(private http: HttpClient) {}

  // Método para criar um novo pedido
  createPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedido);
  }
}
