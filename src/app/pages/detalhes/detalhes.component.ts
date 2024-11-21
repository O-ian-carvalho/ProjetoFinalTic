import { Component } from '@angular/core';
import { BotaoComponent } from "../../components/botao/botao.component";
import { HaburguerService } from '../../services/haburguer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';



@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [BotaoComponent,RouterLink ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {
  rounteId: number;
  hamburguer: any = '';
  constructor(private service: HaburguerService, private route: ActivatedRoute)
  {
    this.rounteId = Number(this.route.snapshot.paramMap.get('id'));

      this.service.getHamburguer(this.rounteId).subscribe({
        next: (data) => {
          
          this.hamburguer = data[0]; // Sucesso
          this.hamburguer[0].preco = parseFloat(data.hamburguer).toFixed(2);
          console.log(data);
        },
        error: (error) => {
          console.error(error); // Erro
        }
      });
  }
}
