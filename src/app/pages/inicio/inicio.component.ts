import { Component } from '@angular/core';
import { BotaoComponent } from "../../components/botao/botao.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BotaoComponent,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
