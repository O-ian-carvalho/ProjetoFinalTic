import { Component } from '@angular/core';
import { BotaoComponent } from '../../components/botao/botao.component';
import { InputComponent } from '../../components/input/input.component'; // Importe app-input
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  standalone: true,
  imports: [BotaoComponent, InputComponent], // Adicione app-input aqui
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  inputValue: string = ''; // Variável para armazenar o valor.

  updateValue(value: string): void {
    this.inputValue = value; // Atualiza o valor com o emitido pelo filho.
  }

  constructor(private service: PedidoService){
  }


    fazerPedido() : void{

      this.service.getHamburguerByName(this.inputValue).subscribe({
        next: (data) => {
          console.log(data);

          this.service.createPedido(data.id).subscribe({
            next: (data) => {
              alert("Pedido feito com sucesso!")
            },
            error: (error) => {
              alert("Pedido falhou"); // Erro
            }
          });
        },
        error: (error) => {
          alert("Pedido digitado errado"); // Erro
        }
      });

      
  }

  

}
