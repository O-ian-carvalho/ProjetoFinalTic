import { Component } from '@angular/core';
import { HamburguerCardComponent } from '../../components/hamburguer-card/hamburguer-card.component';
import { BotaoComponent } from "../../components/botao/botao.component";
import { RouterLink } from '@angular/router';
import { CetegoriasService } from '../../services/cetegorias.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [HamburguerCardComponent, BotaoComponent, RouterLink,CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {
  rounteId: number;
  mostrarBotao: boolean = true;
  arrayList: any[] = [];
  displayArrayList : any[] = [];

  titulo : string = "Cardápio";



  ngOnInit(): void {
    // Recuperar o parâmetro 'id' da URL usando snapshot
    console.log('ID recebido:', this.rounteId);
  }

  cardapioCompleto() : void{
    this.displayArrayList = this.arrayList;
    this.mostrarBotao = false;
  }

    constructor(private service: CetegoriasService, private route: ActivatedRoute)
    {

      this.rounteId = Number(this.route.snapshot.paramMap.get('id'));

      if(this.rounteId == 0)
      {
        this.service.getCategorias().subscribe({
          next: (data) => {
            this.arrayList = data;
            this.displayArrayList = data.slice(0, 3) // Sucesso
            if(this.displayArrayList.length == this.arrayList.length)
              {
                this.mostrarBotao = false;
              }
          },
          error: (error) => {
            console.error(error); // Erro
          }
        });
      } else{
        this.service.getHamburguersPorCategoria(this.rounteId).subscribe({
          next: (data) => {
            this.arrayList = data; // Sucesso
            this.displayArrayList = data.slice(0, 3)
            if(this.displayArrayList.length == this.arrayList.length)
              {
                this.mostrarBotao = false;
              }
          },
          error: (error) => {
            console.error(error); // Erro
          }
        });


        this.service.getCategoria(this.rounteId).subscribe({
          next: (data) => {
            this.titulo = data[0].nome;
            console.log(data);
          },
          error: (error) => {
            console.error(error); // Erro
          }
        });
      }
      
      
    }
}
