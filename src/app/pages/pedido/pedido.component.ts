import { Component } from '@angular/core';
import { BotaoComponent } from '../../components/botao/botao.component';
import { InputComponent } from '../../components/input/input.component'; // Importe app-input

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  standalone: true,
  imports: [BotaoComponent, InputComponent], // Adicione app-input aqui
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {}
